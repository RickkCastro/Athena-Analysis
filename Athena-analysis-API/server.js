const express = require("express");
const bodyParser = require("body-parser");
const pdfParse = require("pdf-parse");
const cors = require("cors");

const app = express();
const PORT = 3000;

require("dotenv").config();
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

app.use(cors());
app.use(bodyParser.raw({ type: "application/pdf", limit: "5mb" }));

//Chave da API do gemini
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function sendPrompt(textCV) {
    const generationConfig = {
        temperature: 1,
        topK: 0,
        topP: 0.95,
        maxOutputTokens: 8192,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    const model = genAI.getGenerativeModel({
        model: "gemini-pro",
        generationConfig,
        safetySettings,
    });

    const prompt =
        "Você é uma analista de currículos. Ao receber um currículo, você deve listar os pontos fortes e melhorias. Sempre finalize com uma conclusão sobre o currículo. Você não deve analisar a formatação do currículo, apenas o conteúdo. Segue currículo: " +
        textCV;

    try {
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        return text;
    } catch (e) {
        console.error("Error generating content:", e);
        return null;
    }
}

async function extractTextFromPDF(pdf) {
    try {
        const data = await pdfParse(pdf);
        return data.text;
    } catch (err) {
        console.error("Error extracting text:", err);
        return null;
    }
}

// Rota para extrair texto do PDF
app.post("/sendCV", async (req, res) => {
    if (!req.body || req.headers["content-type"] !== "application/pdf") {
        return res.status(400).send("Invalid PDF file");
    }

    const pdfBuffer = req.body;

    const textCV = await extractTextFromPDF(pdfBuffer);

    if (textCV) {
        const PromptResponse = await sendPrompt(textCV);

        if (PromptResponse) {
            res.json({ text: formatTextToHTML(PromptResponse) });
        } else {
            res.status(400).send("Error generating content");
        }
    } else {
        res.status(400).send("Error extracting text");
    }
});

function formatTextToHTML(text) {
    let cutText = "";
    const textLines = text.split("\n");

    textLines.forEach((line) => {
        cutText += line + "<br>";
    });

    const regex = /(\*\*)(.*?)(\*\*)/g;
    let finalText = cutText.replace(regex, (match, p1, p2, p3) => {
        return `<strong>${p2}</strong>`; // Retorna o texto com tags strong
    });

    finalText = finalText
        .replace(/\*/g, "-")
        .replace(/(<br>){3,}/g, "<br><br>");

    return finalText;
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

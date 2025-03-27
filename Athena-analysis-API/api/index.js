import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

const app = express();
const PORT = 3000;

dotenv.config();

app.use(cors());
app.use(bodyParser.raw({ type: 'application/pdf', limit: '5mb' }));

//Chave da API do gemini
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

async function sendPrompt(pdfResp) {
	const prompt = `Você é um analista de currículos. Ao receber um currículo, você deve listar os pontos fortes e melhorias. Sempre finalize com uma conclusão sobre o currículo. Você não deve analisar a formatação do currículo, apenas o conteúdo. Segue currículo:`;

	try {
		const response = await ai.models.generateContent({
			model: 'gemini-1.5-flash',
			contents: [
				{
					inlineData: {
						data: Buffer.from(pdfResp).toString('base64'),
						mimeType: 'application/pdf',
					},
				},
				prompt,
			],
		});
		const text = response.text;
		return text;
	} catch (e) {
		console.error('Error generating content:', e);
		return null;
	}
}

// Rota para extrair texto do PDF
app.post('/sendCV', async (req, res) => {
	if (!req.body || req.headers['content-type'] !== 'application/pdf') {
		return res.status(400).send('Invalid PDF file');
	}

	const pdfBuffer = req.body;

	if (pdfBuffer) {
		const PromptResponse = await sendPrompt(pdfBuffer);

		if (PromptResponse) {
			res.json({ text: formatTextToHTML(PromptResponse) });
		} else {
			res.status(400).send('Error generating content');
		}
	} else {
		res.status(400).send('Error extracting text');
	}
});

function formatTextToHTML(text) {
	let cutText = '';
	const textLines = text.split('\n');

	textLines.forEach((line) => {
		cutText += line + '<br>';
	});

	const regex = /(\*\*)(.*?)(\*\*)/g;
	let finalText = cutText.replace(regex, (match, p1, p2, p3) => {
		return `<strong>${p2}</strong>`; // Retorna o texto com tags strong
	});

	finalText = finalText.replace(/\*/g, '-').replace(/(<br>){3,}/g, '<br><br>');

	return finalText;
}

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => res.send('Express on Vercel'));

export default app;

import Wave from "react-wavify";
import "./App.css";

import { MdOutlineContactPage } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";

function App() {
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFileChange = async (event) => {
        setResponse("");
        setLoading(true);
        const file = event.target.files[0];

        try {
            const response = await axios.post(
                "https://rickkcastro-athena-analysis-api.vercel.app/sendCV",
                file,
                { headers: { "Content-Type": "application/pdf" } }
            );
            console.log(response.data);
            setResponse(response.data.text);
            setLoading(false);
        } catch (error) {
            console.error("Error uploading file:", error);
            setLoading(false);
        }
    };

    return (
        <>
            <div className="main">
                <div className="column left ">
                    <h1>Athena analysis</h1>
                    <p className="text">
                        Quer saber se seu currículo está pronto para
                        impressionar os recrutadores? 🤔
                    </p>
                    <p className="text">
                        Nossa plataforma usa a inteligência artificial do Google
                        para analisar seu currículo e te dar dicas de melhorias
                        e destacar seus pontos fortes!
                    </p>
                    <p className="text">
                        É simples: você carrega seu currículo, a IA analisa tudo
                        e você recebe um relatório completo!
                    </p>
                    <p className="text">
                        <strong>Descubra:</strong>
                    </p>
                    <ul>
                        <li>✅ O que está ótimo no seu currículo</li>
                        <li>📈 O que pode ser melhorado</li>
                        <li>
                            🏆 Como aumentar suas chances de conseguir o emprego
                        </li>
                    </ul>
                </div>
                <div className="column right">
                    <h3
                        style={{
                            margin: 15,
                            maxWidth: 250,
                            textAlign: "center",
                        }}
                    >
                        Envie o seu currículo para a Athena analisar 🤖
                    </h3>
                    <label className="labelInputCv">
                        <MdOutlineContactPage size="25px" />
                        Enviar currículo
                        <input
                            type="file"
                            accept=".pdf"
                            name="cv"
                            id="inputCV"
                            onChange={handleFileChange}
                        />
                    </label>
                    {loading ? <Loading></Loading> : ""}
                    {response == "" ? (
                        ""
                    ) : (
                        <div
                            className="response"
                            dangerouslySetInnerHTML={{ __html: response }}
                        ></div>
                    )}
                </div>
            </div>
            <Wave
                fill="#0099FF"
                paused={false}
                style={{
                    display: "flex",
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    zIndex: -1,
                }}
                options={{
                    height: 20,
                    amplitude: 40,
                    speed: 0.15,
                    points: 3,
                }}
            />
        </>
    );
}

export default App;

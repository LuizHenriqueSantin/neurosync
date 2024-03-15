import "./about.css"
import michele from "../assets/michele1.jpg"
import ayron from "../assets/ayron1.jpg"
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from "react-router-dom";

function About(){
    return(
        <div className="about">
            <h1>Quem somos</h1>
            <p>A Neurosync trabalha com psicologia aliada à tecnologia de ponta e neurociência para promover o treinamento cerebral através da Neuromodulação, com técnicas de Neurofeedback e estimulaçâo Transcraniana, criando protocolos para tratamento de sintomas patológicos e também promover a melhora do desempenho cognitivo seja para elevar performance intelectual, desempenho nos estudos, nos esportes e demais demandas que exija foco, concentração e cognição.</p>
            <Link className="lnk-btn" to='/about#header' onClick={() => window.scrollTo(0, 0)}><button>Saiba mais</button></Link>
            <div className="card-container">
                <div className="card">
                    <img alt="ERROR" src={michele}/>
                    <h2>Michele Santin</h2>
                    <p className="desc">Psicóloga formada em 2010, especialista em Neurofeedback, Terapia Cognitivo Comportamental, EMDR e Brainspoting, com 8 anos de atuação na área clínica, 5 anos de atuação em organizações de médio e grande porte e 3 anos de atuação em psicologia hospitalar.</p>
                    <a href='https://wa.me/5549999956035' target="_blank" rel="noreferrer"><AiOutlineWhatsApp size={45}/></a>
                    <p className="nmb">49 99995-6035</p>
                </div>
                <div className="card">
                    <img alt="ERROR" src={ayron}/>
                    <h2>Ayron Pontes</h2>
                    <p className="desc">Psicólogo formado em 2009, especialista em Neurofeedback, com 13 anos de atuação em organizações de médio e grande porte, desenvolvimento de equipes e foco em humanização.</p>
                    <a href='https://wa.me/5547991212098' target="_blank" rel="noreferrer"><AiOutlineWhatsApp size={45}/></a>
                    <p className="nmb">47 99121-2098</p>
                </div>
            </div>
        </div>
    )
}

export default About
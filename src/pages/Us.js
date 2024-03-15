import "./us.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import michele from "../assets/michele2.jpg"
import ayron from "../assets/ayron2.jpg"
import Left from "../components/Left"
import Right from "../components/Right"

function Us(){

    return(
        <div>
            <Navbar id="header"/>
            <div className="us-container">
                <h1>Nossa história</h1>
                <p className="us-p">A Neurosync nasce de um sonho de trabalhar com a mente humana através da Psicologia e Neurociencia, aliada ao que há de melhor na tecnologia pra buscar um equilibrio de bem estar e performance no dia a dia, entregando aos clientes um acompanhamento personalizado a cada necessidade, seja ela social, profissional ou pessoal, afinal somos únicos. {`{...}`}<br /> {`Atualmente trabalhamos com 2 técnicas, o Neurofeedback e a Estimulação Transcraniana (TDCS).`}</p>
                <div className="time-display">
                    <div className="profile-container">
                        <img alt="ERROR" src={michele}/>
                        <p>Michele Santin</p>
                        <Left year="2000" txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo"/>
                        <Right year="2001" txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo"/>
                        <Left year="2002" txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo"/>
                        <Right year="2003" txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo"/>
                        <Left year="2004" txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo"/>
                        <Right year="2005" txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo"/>
                    </div>
                    <div className="profile-container">
                        <img alt="ERROR" src={ayron}/>
                        <p>Ayron Pontes</p>
                        <Right year="2000" txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo"/>
                        <Left year="2001" txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo"/>
                        <Right year="2002" txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo"/>
                        <Left year="2003" txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo"/>
                        <Right year="2004" txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo"/>
                        <Left year="2005" txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Us
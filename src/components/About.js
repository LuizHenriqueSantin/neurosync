import "./about.css"
import michele from "../assets/michele1.jpg"
import ayron from "../assets/ayron1.jpg"
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from "react-router-dom";

function About(){
    return(
        <div className="about">
            <h1>Quem somos</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Link className="lnk-btn" to='/about#header' onClick={() => window.scrollTo(0, 0)}><button>Saiba mais</button></Link>
            <div className="card-container">
                <div className="card">
                    <img alt="ERROR" src={michele}/>
                    <h2>Michele Santin</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <a href='https://wa.me/5549999956035' target="_blank" rel="noreferrer"><AiOutlineWhatsApp size={40}/></a>
                    <p className="nmb">49 99995-6035</p>
                </div>
                <div className="card">
                    <img alt="ERROR" src={ayron}/>
                    <h2>Ayron Pontes</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <a href='https://wa.me/5547991212098' target="_blank" rel="noreferrer"><AiOutlineWhatsApp size={40}/></a>
                    <p className="nmb">47 99121-2098</p>
                </div>
            </div>
        </div>
    )
}

export default About
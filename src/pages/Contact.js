import "./contact.css"
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import michele from "../assets/michele3.jpg"
import ayron from "../assets/ayron3.jpg"
import neurosync from "../assets/logopreta-removebg-preview.png"
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Contact(){
    return(
        <div>
            <Navbar />
                <div className="contact-container">
                    <h1>Entre em contato conosco</h1>
                    <div className="crd">
                        <img alt="ERROR" src={neurosync} id="neuro"/>
                        <div className="if-container">
                            <h3>NeuroSync</h3>
                            <div className="icn">
                                <FaInstagram className="cnt-icon" size={30} />
                            </div>
                        </div>
                    </div>
                    <div className="crd">
                    <img alt="ERROR" src={michele}/>
                        <div className="if-container">
                            <h3>Michele Santin</h3>
                            <div className="icn">
                                <AiOutlineWhatsApp className="cnt-icon" size={30}/>
                                <FaInstagram className="cnt-icon" size={30} />
                            </div>
                        </div>
                    </div>
                    <div className="crd">
                    <img alt="ERROR" src={ayron}/>
                        <div className="if-container">
                            <h3>Ayron Pontes</h3>
                            <div className="icn">
                                <AiOutlineWhatsApp className="cnt-icon" size={30}/>
                                <FaInstagram className="cnt-icon" size={30} />
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Contact
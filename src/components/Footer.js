import "./footer.css"
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

function Footer(){
    return(
        <div className="footer">
            <div>
                <p>Michele Santin - CRP: 12/17320</p>
                <p>Ayron Pontes - CRP: 12/09525</p>
            </div>
            <a href="https://www.instagram.com/neurosync_oficial/" target="_blank" rel="noreferrer">
                <FaInstagram size={30}/>
                <p>@neurosync_oficial</p>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Dermaslim+%7C+Estética+Avançada+em+Itapema/@-27.1269063,-48.6109464,17z/data=!3m1!4b1!4m6!3m5!1s0x94d8b1cf9075f0a1:0x562a77f7e347873b!8m2!3d-27.1269063!4d-48.6083715!16s%2Fg%2F11fxqgw_1x?hl=pt&entry=ttu">
                 <CiLocationOn size={30}/>
                <p>Rua 230, 440 - Meia Praia, Itapema - SC</p>
            </a>
        </div>
    )
}

export default Footer
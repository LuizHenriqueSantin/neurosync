import "./navbar.css"
import logo from "../assets/logo laranjasite_transparent.png"

function Navbar(){
    return(
        <div className="navbar">
            <img className="nav-img1" alt="ERROR" src={logo}/>
            <ul className="nav-list">
                <li className="nav-item">Home</li>
                <li className="nav-item">Sobre nós</li>
                <li className="nav-item">Agende sua consulta</li>
            </ul>
        </div>
    )
}

export default Navbar
import "./navbar.css"
import logo from "../assets/logo laranjasite_transparent.png"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <div className="navbar">
            <img className="nav-img1" alt="ERROR" src={logo}/>
            <ul className="nav-list">
                <Link className="lnk" to='/'><li>Home</li></Link>
                <Link className="lnk" to='/about'><li>Sobre nós</li></Link>
                <Link className="lnk" to='/'><li>Agende sua consulta</li></Link>
            </ul>
        </div>
    )
}

export default Navbar
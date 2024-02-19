import "./navbar.css"
import logo from "../assets/logo laranjasite_transparent.png"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <div className="navbar">
            <img className="nav-img1" alt="ERROR" src={logo}/>
            <ul className="nav-list">
                <Link className="lnk" to='/' onClick={() => window.scrollTo(0, 0)}><li>Home</li></Link>
                <Link className="lnk" to='/about' onClick={() => window.scrollTo(0, 0)}><li>Sobre nós</li></Link>
                <Link className="lnk" to='/contact' onClick={() => window.scrollTo(0, 0)}><li>Contato</li></Link>
            </ul>
        </div>
    )
}

export default Navbar
import "./us.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import michele from "../assets/michele1.jpg"
import ayron from "../assets/ayron1.jpg"
import Left from "../components/Left"
import Right from "../components/Right"

function Us(){

    return(
        <div>
            <Navbar id="header"/>
            <div className="us-container">
                <h1>Nossa história</h1>
                <p className="us-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. A condimentum vitae sapien pellentesque habitant. Volutpat odio facilisis mauris sit amet massa vitae tortor. Mattis enim ut tellus elementum sagittis vitae et. Et odio pellentesque diam volutpat commodo sed. Quam quisque id diam vel. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Velit ut tortor pretium viverra suspendisse. Tortor vitae purus faucibus ornare.</p>
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
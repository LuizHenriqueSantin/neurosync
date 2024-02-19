import "./presentation.css"
import profile from "../assets/profile.jpg"

function Presentation(){
    return(
        <div className="presentation">
            <div className="text-presentation">
                <h1>Neurosync</h1>
                <h2>Seu cérebro em movimento</h2>
            </div>
            <img alt="ERROR" src={profile}/>
        </div>
    )
}

export default Presentation
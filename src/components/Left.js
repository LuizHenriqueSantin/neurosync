import "./timeline.css"

function Left({txt, year}){
    return(
        <div className="time-container">
            <div className="time-info-left">
                <div className="year-container">
                    <h3>{year}</h3>
                    <div className="line"/>
                </div>
                <p>{txt}</p>
            </div>
            <div className="empty"></div>
        </div>
    )
}

export default Left
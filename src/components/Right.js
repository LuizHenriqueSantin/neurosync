function Right({txt, year}){
    return(
        <div className="time-container">
            <div className="empty"></div>
            <div className="time-info-right">
                <div className="year-container">
                    <div className="line"/>
                    <h3>{year}</h3>
                </div>
                <p>{txt}</p>
            </div>
        </div>
    )
}

export default Right
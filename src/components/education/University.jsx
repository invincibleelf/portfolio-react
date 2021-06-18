import { Component } from "react";

class University extends Component {

    render() {

        let university = this.props.university;
        return (
            <div className="education-sec">
                <div className="education-banner">
                    <img src={university.logo} alt={university.name} />
                </div>
                <div className="education-description">
                    <span style={{ fontWeight: "bold" }}>{university.course}</span>
                    <span style={{ float: "right" }}>{university.duration}</span>
                    <div style={{ fontStyle: "italic" }}>{university.name}, {university.location}</div>
                    <div>{university.description}</div>
                    <div className="download-btn">
                        <a href={university.transcript} target="_blank" rel="noreferrer">
                        <button className="primary">Transcript</button>
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}


export { University }
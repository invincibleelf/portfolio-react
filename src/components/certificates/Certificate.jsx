import { Component } from "react";

class Certificate extends Component {
    render() {
        let certificate = this.props.certificate;

        return (
            <div className="certification-sec">
                <div className="certificate-banner">
                    <img src={certificate.image} alt={certificate.name} />
                </div>
                <div className="project-description">
                    <div style={{ fontWeight: "bold" }}>{certificate.name}</div>
                    <div>{certificate.description}</div>
                </div>
                {certificate.transcript ?<div className="download-btn">
                    <a href={certificate?.transcript} target="_blank" rel="noreferrer">
                        <button className="primary">Certificate</button>
                    </a>
                </div>:""}
            </div>
        )
    }
}

export { Certificate }
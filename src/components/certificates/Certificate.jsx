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
            </div>
        )
    }
}

export { Certificate }
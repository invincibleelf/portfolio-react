import { Component } from "react";
import { Certificate } from "../components/certificates/Certificate";
import { certification } from "../portfolio";


export default class Certification extends Component {
    
    render(){
        let certificates = certification.certificates.map((c,i) => {
            return <Certificate certificate={c} key={i}/>
        });
        
        return(
            <div id="certification">
                <div className="title">Certification and Programs</div>
                <div className="certification-div">
                    {certificates}
                </div>
            </div>
        )
    }
}
import { Component } from "react";
import { University } from "../components/education/University";
import {education} from "../portfolio"

export default class Education extends Component {

    render(){
        let universities = education.universities.map((u,i)=> {
            return <University university={u} key={i}/>;
        });

        return(
            <div id="education" className="education-div">
                <div className="title">{education.title}</div>
                {universities}
            </div>
        )
    }
}
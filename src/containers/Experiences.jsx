import { Component } from "react";
import {Job} from "../components/experiences/Job";
import { experiences } from "../portfolio";

export default class Experiences extends Component {



    render() {
        let jobs = experiences.jobs.map((j, i) => {
            return <Job key={i} job={j} />
        });

        return (
            <div id="experiences" >
                <div className="title">{experiences.title}</div>
                <div className="experiences-div">
                    {jobs}
                </div>
            </div>
        )
    }
}
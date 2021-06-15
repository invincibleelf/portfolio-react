import { Component } from "react";
import Project from "../components/projects/Project";
import { projects } from "../portfolio"

export default class Projects extends Component {


    render() {

        let projectsSection= projects.project.map((p, i) => {
            return <Project project={p} key={i} />
        })
        return (
            <div id="projects">
                <div className="title">{projects.title}</div>
                <div className="projects-div">
                    {projectsSection}
                </div>
            </div>
        );
    }
}
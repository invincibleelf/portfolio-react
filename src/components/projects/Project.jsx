import { Component } from "react";


export default  class Project extends Component {

    render(){

        let project = this.props.project;
        return(
        <div className="project-sec">
           <div className="project-banner">
               <img src={project.image} alt={project.name}/>
           </div>
           <div className="project-description">
               <div style={{fontWeight:"bold"}}>{project.name}</div>
                <div style={{textAlign:"left"}}>{project.description}</div>
                <div>
                    <button onClick={()=>{window.open(project.link)} }>View Project</button>
                </div>
           </div>
        </div>
        )
    }
}
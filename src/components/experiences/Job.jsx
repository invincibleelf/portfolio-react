import { Component } from "react";

const Tools = (props) => {
    return (
        <span style={{padding:"0 0.5em"}}>
            <span>{props.tool.src}</span>
            <span style={{fontSize:"0.8em"}}>{props.tool.name}</span>
        </span>

    )
};

class Job extends Component {

    render() {
        let job = this.props.job;
        let tools = job.tools.map((t, i) => {
            return <Tools key={i} tool={t} />
        });
        return (
            <div className="job-sec">
                <div className="job-banner">
                    <div className="company">
                        {job.company}
                    </div>
                    <img src={job.logo} alt={job.title} title="test" />
                </div>
                <div className="job-description">
                    <div>{job.title}</div>
                    <div>{job.duration}</div>
                    <div className="job-responsibility">{job.responsibility}</div>
                    <div style={{textAlign:"left",fontWeight:"bold"}}>Technologies Used</div>
                    <div className='tools'>
                        {tools}
                    </div>
                </div>

            </div>
        );
    }
}

export { Job, Tools }
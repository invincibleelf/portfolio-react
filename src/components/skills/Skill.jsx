import { Component } from "react";

const ProgressBar = (props) => {
    return (
        <div className='progress-bar'>
            <Filler percentage={props.percentage} />
        </div>
    )
};

const Filler = (props) => {
    return (
        <div className='filler' style={{ width: `${props.percentage}%` }}></div>
    )
}

class Skill extends Component {

    render() {

        let skill = this.props.skill;
        return (
            <div className="skill">
                <div style={{ padding: `5px` }}>
                    <div>{skill.src}</div>
                    <div style={{fontSize:'0.8em', textAlign:'center'}}>{skill.name}</div>
                </div>

                <div>
                    <ProgressBar percentage={skill.level} />
                </div>
            </div>
        );
    }
}

export { Skill, Filler, ProgressBar };
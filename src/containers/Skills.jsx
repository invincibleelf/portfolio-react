import { Component } from "react";
import { Skill } from "../components/skills/Skill";
import { skills } from "../portfolio"

export default class Skills extends Component {

    render() {

        let frontend = skills.frontend;
        let backend = skills.backend;
        let frontSkills = frontend.skills;
        let backendSkills = backend.skills;

        let frontSkillSection = frontSkills.map((s,i) => {
            return <Skill key={i} skill={s}/>
        });

        let backendSkillSection = backendSkills.map((s,i) => {
            return <Skill key={i} skill={s}/>
        });

        return (
            <div id="skills" className='skills-div'>
                <div className="title">{skills.title}</div>
                <div className='frontend-sec'>
                    <span>{frontend.title}</span>
                    {frontSkillSection}
                </div>
                <div className="backend-sec">
                    <span>{backend.title}</span>
                    {backendSkillSection}
                </div>
            </div>
        );
    }
}
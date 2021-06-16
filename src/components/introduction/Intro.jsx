import { Component } from "react";
import { introduction } from "../../portfolio";
import SocialMedia from "../social media/SocialMedia";


export default class Intro extends Component {

    render() {

        return (
            <div className="intro-sec">
                <div className="title">{introduction.title}</div>
                <p>{introduction.summary}</p>
                <SocialMedia />
                <a href={introduction.resume} target="_blank">
                    <button className="primary">Resume</button>
                </a>

            </div>
        );
    }

}
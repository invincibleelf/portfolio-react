import { Component } from "react";
import { introduction } from "../../portfolio";
import SocialMedia from "../social media/SocialMedia";


export default class Intro extends Component {

    render(){

        return(
            <div className="intro-sec">
                <div className="title">{introduction.title}</div>
                <p>{introduction.summary}</p>
                <SocialMedia/>
                <button className="primary">Resume</button>
            </div>
        );
    }

}
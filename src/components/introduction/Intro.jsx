import { Component } from "react";
import { introduction } from "../../portfolio";
import SocialMedia from "../social media/SocialMedia";


export default class Intro extends Component {

    render(){

        return(
            <div className="intro-sec">
                <div className="intro-title">{introduction.title}</div>
                <p>{introduction.summary}</p>
                <SocialMedia/>
                <button class="primary">Resume</button>
            </div>
        );
    }

}
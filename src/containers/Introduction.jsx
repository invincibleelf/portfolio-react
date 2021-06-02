import { Component } from "react";
import introOne from "../assests/images/intro-1.jpg";
import Intro from "../components/introduction/Intro";

export default class Introduction extends Component {


    render() {
        return (
            <div className="intro-div">
               <Intro/>
                <div className="intro-img">
                    <img src={introOne} />
                </div>
            </div>
        );
    }
}
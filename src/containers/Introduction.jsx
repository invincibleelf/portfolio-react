import { Component } from "react";
import introOne from "../assests/images/intro-1.jpg";
import introTwo from "../assests/images/intro-2.jpg";
import CanDo from "../components/introduction/CanDo";
import Intro from "../components/introduction/Intro";

export default class Introduction extends Component {


    render() {
        return (
            <div className="intro-div">
               <Intro/>
                <div className="intro-img">
                    <img src={introOne} alt="introduction" />
                </div>

                <div className="cando-img">
                    <img src={introTwo} alt="What I can Do" />
                </div>
                <CanDo/>

            </div>
        );
    }
}
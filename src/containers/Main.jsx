import React, { Component } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "../App.css";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Education from "./Education";
import Certification from "./Certification";
import Contacts from "./Contacts";
import { FaHandPointer } from "react-icons/fa";

export default class Main extends Component {

    render() {
        return (
            <div className="main-container">

                <Header />
                <Introduction />
                <Skills />
                <Experiences/>
                <Projects/>
                <Education/>
                <Certification/>
                <Contacts/>
                <Footer />
                <button id="topButton" title="Goto top" onClick={()=>{
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }}>
                    <FaHandPointer/>
                </button>
            </div>
        );
    }
}
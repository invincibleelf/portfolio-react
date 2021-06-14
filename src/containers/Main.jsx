import React, { Component } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "../App.css";
import Introduction from "./Introduction";
import Skills from "./Skills";

export default class Main extends Component {

    render() {
        return (
            <div className="main-container">

                <Header/>
                <Introduction id="introduction"/>
                <Skills id="skills"/>
                <Footer />
            </div>
        );
    }
}
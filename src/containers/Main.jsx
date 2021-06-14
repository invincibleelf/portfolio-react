import React, { Component } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "../App.css";
import Introduction from "./Introduction";
import Skills from "./Skills";

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main-container">

                <Header/>
                <Introduction/>
                <Skills/>
                <Footer />
            </div>
        );
    }
}
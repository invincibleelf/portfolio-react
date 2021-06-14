import React, { Component } from "react";
import "./header.css";
import mainlogo from "../../assests/images/main-logo.jpg";
import {introduction} from "../../portfolio";


export default class Header extends Component {

    render() {
        
        return (
            <header>
                <div className="title">
                    <img src={mainlogo} width='75px' alt="main logo" />
                    <a href='/'>
                        {introduction.name}
                    </a>

                </div>
                <nav className="navigation">
                    <a href="#contact">Contact</a>
                    <a href="#education">Education</a>
                    <a href="#projects">Projects</a>
                    <a href="experiences">Experiences</a>
                    <a href="#skills">Skills</a>
                </nav>
            </header>
        );
    }
}


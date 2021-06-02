import React, { Component } from "react";
import "./header.css";
import mainlogo from "../../assests/images/main-logo.jpg";
import {introduction} from "../../portfolio";


export default class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <header>
                <div className="title">
                    <img src={mainlogo} width='75px' />
                    <a href='/'>
                        {introduction.name}
                    </a>

                </div>
                <nav className="navigation">
                    <a href="#">Contact</a>
                    <a href="#">Education</a>
                    <a href="#">Projects</a>
                    <a href="#">Experiences</a>
                    <a href="#">Skills</a>
                </nav>
            </header>
        );
    }
}


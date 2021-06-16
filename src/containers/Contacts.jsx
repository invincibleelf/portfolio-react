import { Component } from "react";
import { FaHome, FaLocationArrow } from "react-icons/fa";
import SocialMedia from "../components/social media/SocialMedia";
import { contacts } from "../portfolio";

export default class Contacts extends Component {

    render() {

        return (
            <div id="contact" className="contacts-div">
                <div className="contact-desc">
                    <div className="title">{contacts.title}</div>
                    <div >{contacts.subtitle}</div>
                    <div><FaHome />{contacts.location}</div>
                    <div>{contacts.opportunity}</div>
                    <SocialMedia />
                </div>
                <div className='contact-banner'>
                    <img src={contacts.image} alt={contacts.title} />
                </div>
            </div>
        )
    }
}
import { Component } from "react";
import { socialMedia } from "../../portfolio";
import { FaTwitter, FaGithub, FaLinkedinIn, FaStackOverflow} from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

export default class SocialMedia extends Component {

    render() {

        return (
            <div className="socialmedia-sec">
                <a href={socialMedia.twitter} rel="noreferrer" target="_blank"><FaTwitter className="twitter" /></a>
                <a href={socialMedia.github} rel="noreferrer" target="_blank"><FaGithub className="github" /></a>
                <a href={socialMedia.linkedin} rel="noreferrer" target="_blank" ><FaLinkedinIn className="linkedin" /></a>
                <a href={socialMedia.stackOverflow} rel="noreferrer" target="_blank" ><FaStackOverflow className="stackOverflow" /></a>
                <a href={`mailto:${socialMedia.gmail}`} ><SiGmail className="gmail" /></a>
            </div>
        );
    }

}
import { Component } from "react";
import { FaCircle, FaStar } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";

class GithubCard extends Component {

    getColor(language) {
        let color = "";

        switch (language) {
            case "Java":
                color = "#b07219";
                break;
            case "JavaScript":
                color = "#f1e05a"
                break;
            default:
                color = "#000000"
        }

        return color;
    };

    render() {

        let repo = this.props.repo;

        return (
            <div className="otherprojects-sec" onClick={() => window.open(repo.html_url,"_blank")}>
                <div style={{ fontWeight: 'bold', fontSize: '1.2em' }}><RiGitRepositoryLine />{repo.name.charAt(0).toUpperCase() + repo.name.slice(1)}</div>
                <div>{repo.description}</div>
                <div>
                    <span style={{ color: this.getColor(repo.language), padding: "0 5px" }} ><FaCircle size="0.8em" /></span>
                    <span>{repo.language}</span>
                    <span style={{ padding: "0 5px" }}><AiOutlineFork />{repo.forks}</span>
                    <span style={{ padding: "0 5px" }}><FaStar />{repo.watchers}</span>
                    <span style={{ float: "right" }}>{repo.size} KB</span>
                </div>
            </div>
        )
    }
}

export { GithubCard }
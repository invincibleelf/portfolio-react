import { Component } from "react";

import { GithubCard } from "../components/otherprojects/GithubCard";
import { otherProjects } from "../portfolio";

export default class OtherProjects extends Component {

    state = {
        repo: []
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        const url = otherProjects.githubapi;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ repo: data })
            });
    }

    render() {

        let reposDiv = this.state.repo.map((r, i) => {

            if (otherProjects.repos.includes(r.name)) {
                return <GithubCard repo={r} key={i} />
            } 
            else {
                return null;
            }

        });

        return (
            <div id="otherprojects">
                <div className="title">Other Projects</div>
                <div className="otherprojects-div">
                    {reposDiv}
                </div>
                <a style={{ display: "inherit", textAlign: "center" }} href={otherProjects.github} target="blank" rel="noreferrer"><button>More Projects</button></a>
            </div>
        )
    }
}
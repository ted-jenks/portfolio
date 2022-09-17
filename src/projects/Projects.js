import React, {Component} from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";
import ProjectItem from "./ProjectItem";
import MotshiImg from "../assets/motshi.png"
import VisualisingImg from "../assets/visualisingTheNews.png"
import Ender from "../common/Ender";

class Projects extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Fade delay={50}>
                    <div style={{height: "20vh"}}/>

                    <ProjectItem text={"right"} img={MotshiImg} title="Motshi" route="https://motshi.com/"
                                 tech={["React-Native", "Solidity", "TensorFlow", "Truffle", "Express"]}>
                        Motshi is a blockchain-based solution for digital proof-of-age that offers users digitised
                        identity with unparalleled security, privacy, and integrity. It is designed to be compliant with
                        UK GDPR and handles storage of identification certificates on the Ethereum network, leaving
                        users in complete control of their data.
                        <br/><br/>
                        Users have long awaited a digital identity application to render their physical wallets useless.
                        For the first time, Motshi makes this possible.
                    </ProjectItem>
                    <ProjectItem text={"left"} img={VisualisingImg} title="Visualising the News"
                                 route="https://visualise-news.herokuapp.com/"
                                 tech={["React", "PyTorch", "AlenNLP", "Neo4j", "Cypher", "Docker"]}>
                        The sheer volume of news these days makes it very hard to make sense of the world around us. To
                        help with this, we developed Big Tech Visualisation. This app presents a graph of the tech
                        industry derived from WikiData and populates it with current stories related to each node.
                        Articles are analysed with NLP and the areas they effect can be identified in real time.
                        Multiple sources are scraped for articles, keeping the visualisation up to date and unbiased.
                        <br/><br/>
                        NOTE: Big Tech Visualisation had the machine running article scraping shut down. Therefore, it
                        is in a frozen state. Articles can still be seen by setting the date filter to a high value.
                    </ProjectItem>
                </Fade>
                <Ender/>
            </>
        )
    }
}

export default Projects;

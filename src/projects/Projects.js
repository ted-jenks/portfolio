import React, { Component } from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";
import ProjectItem from "./ProjectItem";
import MotshiImg from "../assets/motshi.png";
import VisualisingImg from "../assets/visualisingTheNews.png";
import sparkImg from "../assets/spark.png";
import stockImg from "../assets/stockbot.png";

class Projects extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Fade delay={50}>
          <div className="topSpacer" />
          <ProjectItem
            text={"right"}
            img={stockImg}
            title="StockBot"
            route="https://stockbot.site/"
            tech={[
              "OpenAI",
              "Typescript",
              "Prompt Engineering",
              "MUI",
              "React",
            ]}
          >
            StockBot takes natural language queries on the World markets and
            produces dashboards with up-to-date news and prices. GPT 3.5 is used
            write API queries and define the layout of the dashboard. Users can
            modify dashboards with simple text instructions, and save those they
            like for later.
          </ProjectItem>
          <ProjectItem
            text={"left"}
            img={sparkImg}
            title="Spark"
            route="https://github.com/apache/spark"
            tech={[
              "Scala",
              "Java",
              "Python",
              "Distributed Computing",
              "Open-source",
            ]}
          >
            Spark is a unified analytics engine for large-scale data processing.
            As a member of the Spark team at Palantir, I maintain our own fork
            of the Spark code-base and connect it to our software solutions. We
            also make upstream contributions to drive the open-source project
            forward.
          </ProjectItem>
          <ProjectItem
            text={"right"}
            img={MotshiImg}
            title="Motshi"
            route="https://motshi.com/"
            tech={[
              "React-Native",
              "Solidity",
              "TensorFlow",
              "Truffle",
              "Express",
            ]}
          >
            Motshi is a blockchain-based solution for digital proof-of-age that
            offers users digitised identity with unparalleled security, privacy,
            and integrity. It is designed to be compliant with UK GDPR and
            handles storage of identification certificates on the Ethereum
            network, leaving users in complete control of their data.
            <br />
            <br />
            Users have long awaited a digital identity application to render
            their physical wallets useless. For the first time, Motshi makes
            this possible.
          </ProjectItem>
          <ProjectItem
            text={"left"}
            img={VisualisingImg}
            title="Visualising the News"
            route="https://www.youtube.com/watch?v=hM1BTkoR0aI"
            tech={["React", "PyTorch", "AlenNLP", "Neo4j", "Cypher", "Docker"]}
          >
            The sheer volume of news these days makes it very hard to make sense
            of the world around us. To help with this, we developed Big Tech
            Visualisation. This app presents a graph of the tech industry
            derived from WikiData and populates it with current stories related
            to each node. Articles are analysed with NLP and the areas they
            effect can be identified in real time. Multiple sources are scraped
            for articles, keeping the visualisation up to date and unbiased. See
            the demo presented by my team mate Jonas.
            {/*<br/><br/>*/}
            {/*NOTE: Big Tech Visualisation had the machine running article scraping shut down. Therefore, it*/}
            {/*is in a frozen state. Articles can still be seen by setting the date filter to a high value.*/}
          </ProjectItem>
        </Fade>
      </>
    );
  }
}

export default Projects;

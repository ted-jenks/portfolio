import React, { Component } from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";
import ProjectItem from "./ProjectItem";
import MotshiImg from "../assets/motshi.jpg";
import VisualisingImg from "../assets/visualisingTheNews.png";
import sparkImg from "../assets/spark.png";
import stockImg from "../assets/stockbot.png";
import eveImg from "../assets/eve-image.png";
import whirlImg from "../assets/whirl.png";

class Projects extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Fade delay={1000}>
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
            <br />
            <br />
            Many users of ChatGPT have been impressed by the LLM's ability to
            answer challenging questions about the world. However, its frozen
            state (trained with data available up to 2021) means it struggles
            with questions related to current affairs. By using GPT's
            comprehension and tuning the foundational model to complete a
            single, structured task, we are able to build an app that can
            feedback real-time, objectively factual data to the user.
            <br />
            <br />
            Moreover, by using an LLM to process the user's query into a
            predefined, structured state, we put the model on rails. Given the
            issues faced with 'hallucinations' in which the model returns
            nonsensical answers, this is valuable for real-world scenarios in
            which the output of the AI actually needs to be used for high-stakes
            decision making, such as trading in the World markets.
          </ProjectItem>
        </Fade>
        <Fade delay={50}>
          <ProjectItem
              text={"left"}
              img={eveImg}
              title="eve-cli"
              route="https://github.com/ted-jenks/eve-cli"
              tech={["Rust", "OpenAI", "Prompt Engineering", "Clap", "Cargo"]}
          >
            Meet eve, your personal AI development assistant. She is an
            OpenAI-backed command line interface implemented in Rust.
            <br />
            <br />
            She is designed to be resilient to improper input with careful code
            design and strong error management. See the github repo for the demo.
          </ProjectItem>
          <ProjectItem
              text={"right"}
              img={whirlImg}
              title="whirl"
              route="https://github.com/ted-jenks/whirl"
              tech={["Haskell", "Functional", "Library", "Stack", "Cabal"]}
          >
            Whirl is a basic logging library for Haskell. I took on this project to teach myself the basics of Haskell
            and experience setting up a full library in the language.
            <br />
            <br />
            It supports asynchronous logging functionality at different levels.
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
            <br />
            <br />
            As the core of the compute backend, we collaborate with many teams
            across the company to produce our software offerings.
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
            Motshi represents an alternative look into the world of
            cryptocurrency and blockchain. One focused on practical solutions to
            existing problems that the exciting technology can actually help
            solve. With the age of digital identity just around the corner,
            decentralisation of information and control could genuinely curb
            many of the concerns that have prevented it becoming a reality until
            now.
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
            the demo presented by my team mate Jonas in the video that comes up
            on click.
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

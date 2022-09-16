import './App.css';
import {Component} from "react";
import Socials from "./common/Socials";
import HomeBar from "./common/HomeBar";
import {Home} from "./home/Home"
import Projects from "./projects/Projects"
import Contact from "./contact/Contact"
import {Route, Routes} from "react-router-dom"
import NoRoute from "./noRoute/NoRoute";


class App extends Component {
    componentDidMount() {
        document.title = "Ted"
    }

    handleResumeClick = () => {
        console.log('Resume Button Pressed')
    };

    render() {
        return (
            <div className="App">
                <div className="pageContainer">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NoRoute />} />
                </Routes>
                </div>
                <Socials />
                <HomeBar />
            </div>
        )
    }
}

export default App;

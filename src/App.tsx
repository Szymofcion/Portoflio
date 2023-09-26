import Main from "./components/Main";
import Icons from "./components/Icons";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import "./App.css";
import NewNav from "./components/NewNav";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="background-main">
      <NewNav />
      <div className="wrapper">
        <Main />
        <div className="wrapper-aboutme">
          <Icons />
          <AboutMe />
        </div>
        <MyProjects />
        <Timeline />
        <Contact />
        <MyProjects />
      </div>
    </div>
  );
}

export default App;

import Main from "./components/Main";
import LeftIcons from './ui/LeftIcons'
import Icons from "./components/Icons";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import NewNav from "./components/NewNav";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="background-main" >
      <LeftIcons/>
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

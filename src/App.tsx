import Main from "./components/Main";
import LeftIcons from "./ui/LeftIcons";
import Icons from "./components/Icons";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import NewNav from "./components/NewNav";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.scss";
import "./components/style/thema/_reset.scss";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("purple");
  return (
    <div className={theme}>
      <div className="background">
        <button
          onClick={() => setTheme(theme === "purple" ? "dark" : "purple")}
        >
          Switch Theme
        </button>
        <LeftIcons />
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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

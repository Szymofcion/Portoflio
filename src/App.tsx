
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

import { useTheme } from "./components/context/ThemeContext";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <div className="background">
        
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

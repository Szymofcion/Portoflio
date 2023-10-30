import Main from "./components/Main";
import LeftIcons from "./ui/LeftIcons";
import Icons from "./components/Icons";
import AboutMe from "./components/AboutMe";
import MyProjectsSlider from "./components/MyProjectsSlider";
import MyProjects from "./components/MyProjects";
import NewNav from "./components/NewNav";
// import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.scss";
import "./components/style/thema/_reset.scss";

import { useTheme } from "./components/context/ThemeContext";
import { useEffect, useState } from "react";

const App = () => {
  const { theme } = useTheme();
  const [showComponent, setShowComponent] = useState<boolean>(true);

  useEffect(() => {
    const calculateSlidesPerPage = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 765) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    };

    window.addEventListener("resize", calculateSlidesPerPage);
    calculateSlidesPerPage();

    return () => {
      window.removeEventListener("resize", calculateSlidesPerPage);
    };
  }, []);
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
          {showComponent ? <MyProjectsSlider /> : <MyProjects />}
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

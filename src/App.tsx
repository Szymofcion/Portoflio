import Main from "./components/Main";
import LeftIcons from "./ui/LeftIcons";
import Icons from "./components/Icons";
import AboutMe from "./components/AboutMe";
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
  const [showSlides, setShoweSlides] = useState<number>(1);
  useEffect(() => {
    const calculateSlidesPerPage = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 765) {
        setShoweSlides(2);
      } else {
        setShoweSlides(1);
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
          <MyProjects />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

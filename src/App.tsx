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

// import {
//   BiLogoJavascript,
//   BiLogoHtml5,
//   BiLogoSass,
//   BiLogoBootstrap,
//   BiLogoCss3,
//   BiLogoTypescript,
//   BiLogoReact,
//   BiLogoRedux,
// } from "react-icons/bi";
// import {
//   SiReactrouter,
//   SiGreensock,
//   SiVitess,
//   SiExpress,
// } from "react-icons/si";
// import { LiaCookieSolid } from "react-icons/lia";

// import adRespect from "./assets/Untitled.png";
// import shoesShop from "./assets/ShoesShop.png";
// import carOrders from "./assets/carOrders.png";
// import ultraGamers from "./assets/UltraGamers.png";
// import portfolio from "./assets/Portfolio.png";
// import netflix from "./assets/Netflix2.png";
// import { MyContext } from "./context/MyContext";
import "./App.scss";
import "./components/style/thema/_reset.scss";

import { useTheme } from "./components/context/ThemeContext";
import { useEffect, useState } from "react";

const App = () => {
  const { theme } = useTheme();
  const [showComponent, setShowComponent] = useState<boolean>(true);

  // interface Slide {
  //   title: string;
  //   src: string;
  //   icons: ReactNode;
  //   link: string;
  //   code: string;
  // }

  // const slides: Slide[] = [
  //   {
  //     src: adRespect,
  //     title: "GiardDesign",
  //     icons: (
  //       <>
  //         <BiLogoJavascript />
  //         <BiLogoHtml5 /> <BiLogoSass />
  //         <BiLogoBootstrap />
  //       </>
  //     ),
  //     link: "https://szymofcion.github.io/adRespect/",
  //     code: "https://github.com/Szymofcion/adRespect",
  //   },
  //   {
  //     src: portfolio,
  //     title: "Portfolio",
  //     icons: (
  //       <>
  //         <BiLogoReact />
  //         <BiLogoTypescript />
  //         <BiLogoHtml5 /> <SiGreensock />
  //         <BiLogoSass />
  //         <SiVitess />
  //       </>
  //     ),
  //     link: "",
  //     code: "https://szymofcion.github.io/adRespect/",
  //   },
  //   {
  //     src: shoesShop,
  //     title: "ShoesShop",
  //     icons: (
  //       <>
  //         <BiLogoReact />
  //         <BiLogoJavascript />
  //         <BiLogoHtml5 /> <BiLogoSass />
  //         <SiReactrouter />
  //       </>
  //     ),
  //     link: "https://szymofcion.github.io/ShoesShopRedux/",
  //     code: "https://github.com/Szymofcion/ShoesShopRedux",
  //   },
  //   {
  //     src: netflix,
  //     title: "NetflixClone",
  //     icons: (
  //       <>
  //         <BiLogoReact />
  //         <BiLogoRedux />
  //         <SiExpress />
  //         <BiLogoJavascript />
  //         <BiLogoHtml5 /> <BiLogoSass />
  //       </>
  //     ),
  //     link: "",
  //     code: "https://github.com/Szymofcion/Netflix-Clon",
  //   },
  //   {
  //     src: carOrders,
  //     title: "CarOrders",
  //     icons: (
  //       <>
  //         <BiLogoJavascript />
  //         <BiLogoHtml5 />
  //         <BiLogoCss3 />
  //         <LiaCookieSolid />
  //       </>
  //     ),
  //     link: "https://szymofcion.github.io/car_orders/",
  //     code: "https://github.com/Szymofcion/car_orders",
  //   },
  //   {
  //     src: ultraGamers,
  //     title: "UltraGamers",
  //     icons: (
  //       <>
  //         <BiLogoJavascript />
  //         <BiLogoHtml5 />
  //         <BiLogoCss3 />
  //         <BiLogoBootstrap />
  //       </>
  //     ),
  //     link: "https://szymofcion.github.io/UltraGamers/",
  //     code: "https://github.com/Szymofcion/UltraGamers",
  //   },
  // ];

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

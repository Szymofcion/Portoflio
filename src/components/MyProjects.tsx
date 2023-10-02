import { SetStateAction, useState, ReactNode } from "react";
import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoSass,
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoRedux,
} from "react-icons/bi";
import {
  SiReactrouter,
  SiGreensock,
  SiVitess,
  SiExpress,
} from "react-icons/si";
import { LiaCookieSolid } from "react-icons/lia";

import adRespect from "../assets/Untitled.png";
import shoesShop from "../assets/ShoesShop.png";
import carOrders from "../assets/carOrders.png";
import ultraGamers from "../assets/UltraGamers.png";
import portfolio from "../assets/Portfolio.png";
import netflix from "../assets/Netflix2.png";

import "./style/MyProjects.scss";
interface Slide {
  title: string;
  src: string;
  icons: ReactNode;
  link: string;
  code: string;
}

const MyProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: Slide[] = [
    {
      src: adRespect,
      title: "GiardDesign",
      icons: (
        <>
          <BiLogoJavascript />
          <BiLogoHtml5 /> <BiLogoSass />
          <BiLogoBootstrap />
        </>
      ),
      link: "https://szymofcion.github.io/adRespect/",
      code: "https://github.com/Szymofcion/adRespect",
    },
    {
      src: portfolio,
      title: "Portfolio",
      icons: (
        <>
          <BiLogoReact />
          <BiLogoTypescript />
          <BiLogoHtml5 /> <SiGreensock />
          <BiLogoSass />
          <SiVitess />
        </>
      ),
      link: "",
      code: "https://szymofcion.github.io/adRespect/",
    },
    {
      src: shoesShop,
      title: "ShoesShop",
      icons: (
        <>
          <BiLogoReact />
          <BiLogoJavascript />
          <BiLogoHtml5 /> <BiLogoSass />
          <SiReactrouter />
        </>
      ),
      link: "https://szymofcion.github.io/ShoesShopRedux/",
      code: "https://github.com/Szymofcion/ShoesShopRedux",
    },
    {
      src: netflix,
      title: "NetflixClone",
      icons: (
        <>
          <BiLogoReact />
          <BiLogoRedux />
          <SiExpress />
          <BiLogoJavascript />
          <BiLogoHtml5 /> <BiLogoSass />
        </>
      ),
      link: "",
      code: "https://github.com/Szymofcion/Netflix-Clon",
    },
    {
      src: carOrders,
      title: "CarOrders",
      icons: (
        <>
          <BiLogoJavascript />
          <BiLogoHtml5 />
          <BiLogoCss3 />
          <LiaCookieSolid />
        </>
      ),
      link: "https://szymofcion.github.io/car_orders/",
      code: "https://github.com/Szymofcion/car_orders",
    },
    {
      src: ultraGamers,
      title: "UltraGamers",
      icons: (
        <>
          <BiLogoJavascript />
          <BiLogoHtml5 />
          <BiLogoCss3 />
          <BiLogoBootstrap />
        </>
      ),
      link: "https://szymofcion.github.io/UltraGamers/",
      code: "https://github.com/Szymofcion/UltraGamers",
    },
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
    const container = document.querySelector(".projects__container-box");
    container?.classList.remove("slide-enter");
    container?.classList.add("slide-exit");
    setTimeout(() => {
      container?.classList.remove("slide-exit");
    }, 100);
  };
  return (
    <>
      <section className="projects" id="myProject">
        <h2 className="projects-title">My Procjects</h2>
        <div className="projects__container">
          <div
            className={`projects__container-box ${
              currentIndex === 0 ? "slide-enter" : ""
            }`}
          >
            <h3>{slides[currentIndex].title}</h3>
            <img
              className="projects__container-box--img"
              src={slides[currentIndex].src}
            />
            <button
              className="projects__container-box--arrowLeft"
              onClick={goToPrevious}
            >
              ❮
            </button>
            <button
              className="projects__container-box--arrowRight"
              onClick={goToNext}
            >
              ❯
            </button>
            <div className="projects__container-box--description">
              <p>{slides[currentIndex].icons}</p>
              {currentIndex !== 3 && (
                <button>
                  <a href={slides[currentIndex].link}>Live</a>
                </button>
              )}
              <button>
                <a href={slides[currentIndex].code}>Code</a>
              </button>
            </div>
          </div>
        </div>
        <div className="dots__container">
          {slides.map((slide, slideIndex) => (
            <button
              className="dots__container--dot"
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ⚫
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default MyProjects;

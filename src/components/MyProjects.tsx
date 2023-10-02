import { SetStateAction, useState, ReactNode } from "react";
import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoSass,
  BiLogoBootstrap,
  BiLogoCss3,
} from "react-icons/bi";
import { SiReactrouter } from "react-icons/si";
import { LiaCookieSolid } from "react-icons/lia";

import adRespect from "../assets/Untitled.png";
import shoesShop from "../assets/ShoesShop.png";
import carOrders from "../assets/carOrders.png";
import ultraGamers from "../assets/UltraGamers.png";

import "./style/MyProjects.scss";
interface Slide {
  title: string;
  src: string;
  icons: ReactNode;
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
    },
    {
      src: adRespect,
      title: "Portfolio",
      icons: (
        <>
          <BiLogoJavascript />
          <BiLogoHtml5 /> <BiLogoSass />
          <BiLogoBootstrap />
        </>
      ),
    },
    {
      src: shoesShop,
      title: "ShoesShop",
      icons: (
        <>
          <BiLogoJavascript />
          <BiLogoHtml5 /> <BiLogoSass />
          <BiLogoBootstrap />
          <SiReactrouter />
        </>
      ),
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
              <button>Live</button>
              <button>Code</button>
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

import adRespect from "../assets/Untitled.png";
import shoesShop from "../assets/ShoesShop.png";
import carOrders from "../assets/carOrders.png";
import "./style/MyProjects.scss";
import { SetStateAction, useState } from "react";

interface Slide {
  title: string;
  src: string;
  description: string;
}

const MyProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: Slide[] = [
    {
      src: adRespect,
      title: "GiardDesign",
      description:
        "This is a tic-tac-toe multiplayer game. Authentication is used This is a tic-",
    },
    {
      src: shoesShop,
      title: "ShoesShop",
      description:
        "whether to play with 'O' or 'X', as well as reset the game or leave the room.",
    },
    {
      src: carOrders,
      title: "CarOrders",
      description:
        "whether to play with 'O' or 'X', as well as reset the game or leave the room.",
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
              <p>{slides[currentIndex].description}</p>
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

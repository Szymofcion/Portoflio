import { SetStateAction, useState } from "react";

import { useContext } from "react";
import { ProjectsContext } from "../context/MyContext";

import "./style/MyProjectsSlide.scss";

const MyProjectsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const myProjects = useContext(ProjectsContext);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? myProjects.slides.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === myProjects.slides.length - 1;
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
            <h3>{myProjects.slides[currentIndex].title}</h3>
            <img
              className="projects__container-box--img"
              src={myProjects.slides[currentIndex].src}
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
              <p>{myProjects.slides[currentIndex].icons}</p>
              {currentIndex !== 3 && (
                <button>
                  <a href={myProjects.slides[currentIndex].link}>Live</a>
                </button>
              )}
              <button>
                <a href={myProjects.slides[currentIndex].code}>Code</a>
              </button>
            </div>
          </div>
        </div>
        <div className="dots__container">
          {myProjects.slides.map((_slide, slideIndex) => (
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

export default MyProjectsSlider;

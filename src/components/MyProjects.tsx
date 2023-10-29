import { useContext } from "react";
import { ProjectsContext } from "../context/MyContext";

import "./style/MyProjects.scss";

const MyProjects = () => {
  const myProjects = useContext(ProjectsContext);

  return (
    <section className="project">
      {myProjects.slides.map((item, key) => (
        <div className="project__container" key={key}>
          <div className="project__image">
            <img src={item.src} key={key} alt="" />
          </div>
          <div className="project__description">
            <div className="project__description-title">
              <h2 key={key}>{item.title}</h2>
            </div>
            <div className="project__description-subtext">
              <p key={key}>{item.icons}</p>
              {key !== 3 && (
                <button>
                  <a href={item.link}>Live</a>
                </button>
              )}
              <button>
                <a href={item.code}>Code</a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MyProjects;

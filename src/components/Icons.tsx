import css from "../assets/achievement/css-3.png";
import html from "../assets/achievement/html.png";
import ts from "../assets/achievement/typescript.png";
import js from "../assets/achievement/js.png";
import bootstrap from "../assets/achievement/bootstrap.png";
import vsc from "../assets/achievement/visual-studio.png";
import figma from "../assets/achievement/figma.png";
import api from "../assets/achievement/api.png";
import react from "../assets/achievement/react.png";
import "./style/Icons.scss";

const Icons = () => {
  return (
    <section className="background-orbit" id="technolgies">
      <h2 className="title">Techlogies i use</h2>
      <div className="orbit">
        <div className="orbit__center">
          <img className="orbit__center-img" src={html} />
          <img className="orbit__center-img" src={react} />
        </div>
        <div className="magicpattern1"></div>
        <div className="magicpattern2"></div>
        <div className="magicpattern3"></div>
        <ul className="icons">
          <li>
            <img className="icons__css" src={css} />
          </li>
          <li>
            <img className="icons__html" src={html} />
          </li>
          <li>
            <img className="icons__ts" src={ts} />
          </li>
          <li>
            <img className="icons__js" src={js} />
          </li>
          <li>
            <img className="icons__bootstrap" src={bootstrap} />
          </li>
          <li>
            <img className="icons__vsc" src={vsc} />
          </li>
          <li>
            <img className="icons__figma" src={figma} />
          </li>
          <li>
            <img className="icons__api" src={api}></img>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Icons;

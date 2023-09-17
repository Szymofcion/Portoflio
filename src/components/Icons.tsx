import css from "../assets/achievement/css-3.png";
import html from "../assets/achievement/html.png";
import ts from "../assets/achievement/typescript.png";
import js from "../assets/achievement/js.png";
import bootstrap from "../assets/achievement/bootstrap.png";
import vsc from "../assets/achievement/visual-studio.png";
import figma from "../assets/achievement/figma.png";
import api from "../assets/achievement/api.png";
import react from "../assets/achievement/react.png";
import "./Icons.scss";

const Icons = () => {
  return (
    <div className="icons">
      <img className="icons__css" src={css} />
      <img className="icons__html" src={html} />
      <img className="icons__ts" src={ts} />
      <img className="icons__js" src={js} />
      <img className="icons__bootstrap" src={bootstrap} />
      <img className="icons__vsc" src={vsc} />
      <img className="icons__figma" src={figma} />
      <img className="icons__api" src={api} />
      <img className="icons__react" src={react} />
     
    </div>
  );
};

export default Icons;

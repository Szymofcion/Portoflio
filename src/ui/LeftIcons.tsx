import { useState, useEffect } from "react";

import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import "../components/style/LeftIcons.scss";
import ButtonColors from "./ButtonColors";
const LeftIcons = () => {
  const [showIcons, setShowIcons] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowIcons(true);
      } else {
        setShowIcons(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      {showIcons && (
        <ul className="icons__container">
          <li>
            <a>
              <GrLinkedinOption />
            </a>
            <span>LinkedIn</span>
          </li>
          <li>
            <a>
              <AiFillGithub />
            </a>
            <span>Github</span>
          </li>
          <li>
            <ButtonColors />
          </li>
        </ul>
      )}
    </>
  );
};
export default LeftIcons;

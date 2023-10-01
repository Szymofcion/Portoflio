import { useState, useEffect } from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
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
              <FaBeer />
            </a>
            <span>LinkedIn</span>
          </li>
          <li>
            <a>
              <FaBeer />
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

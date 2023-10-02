import { useState, useEffect } from "react";
import { SiAboutdotme } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import "./style/NewNav.scss";

const NewNav = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowNavigation(true);
      } else {
        setShowNavigation(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      {showNavigation && (
        <nav className="nav">
          <div className="nav__container">
            <a href="#technolgies">
              <SiAboutdotme />
            </a>
            <a href="#myProject">
              <GoProjectSymlink />
            </a>
            <a href="#aboutMe">
              <GrContact />
            </a>
          </div>
        </nav>
      )}
    </>
  );
};

export default NewNav;

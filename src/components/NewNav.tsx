import { useState, useEffect } from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import "./NewNav.scss";

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
            <p><FaBeer/></p>
            <p><FaBeer/></p>
            <p><FaBeer/></p>
          </div>
        </nav>
      )}
    </>
  );
};

export default NewNav;

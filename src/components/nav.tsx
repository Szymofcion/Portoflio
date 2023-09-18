// import "./Nav.scss";
// import { useState, useEffect } from "react";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

// const Nav = () => {
//   const [visibleNav, setVisibleNav] = useState<boolean>(false);
//   const [showNavigation, setShowNavigation] = useState<boolean>(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setShowNavigation(true);
//       } else {
//         setShowNavigation(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   });

//   const toggleNav = () => {
//     setVisibleNav(!visibleNav);
//   };

//   return (
//     <>
//       {showNavigation && (
//         <nav className="nav">
//           <div className="nav__main">
//             <p className="nav__main-title">Szymon Dziewa</p>
//             <input
//               type="checkbox"
//               role="button"
//               aria-label="Display the menu"
//               className="menu"
//               onClick={toggleNav}
//             ></input>
//           </div>
//           <div className={`nav__container ${visibleNav ? "" : "visible"}`}>
//             <div className="nav__container-links">
//               <a className="nav__container-links--link">Home</a>
//               <div className="line"></div>
//               <a className="nav__container-links--link">About</a>
//               <div className="line"></div>
//               <a className="nav__container-links--link">Project</a>
//               <div className="line"></div>
//               <a className="nav__container-links--link">Contact</a>
//               <div className="line"></div>
//             </div>
//             <div className="nav__container-icons">
//               <a className="nav__container-icons--icon">
//                 <FaBeer /> Github
//               </a>
//               <div className="line"></div>
//               <a className="nav__container-icons--icon">
//                 <FaBeer /> LinkedIn
//               </a>
//             </div>
//           </div>
//         </nav>
//       )}
//     </>
//   );
// };

// export default Nav;

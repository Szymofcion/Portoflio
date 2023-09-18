// import Nav from "./components/Nav";
import LoaderMain from "./ui/LoaderMain";
import Main from "./components/Main";
import Icons from "./components/Icons";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import "./App.css";
import NewNav from "./components/NewNav";
// import { useLayoutEffect, useRef } from "react";
// import Circle from "./ui/Circle";

function App() {
  // const circleRef = useRef();
  // useLayoutEffect(() => {
  //   // doesn't trigger a render!
  //   if(circleRef.current != null){
  //     circleRef.current.moveTo(300, 100);
  //   }
  // }, []);
  return (
    <div className="background-main">
      <div className="wrapper">
        <NewNav />
        {/* <Nav /> */}
        {/* <Circle ref={circleRef} /> */}
        <Main />
        <div className="wrapper-aboutme">
          <Icons />
          <AboutMe />
        </div>
        <MyProjects />
        <LoaderMain />
        <LoaderMain />
      </div>
    </div>
  );
}

export default App;

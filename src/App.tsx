import Nav from "./components/Nav";
import LoaderMain from "./ui/LoaderMain";
import Main from "./components/Main";
import "./App.css";
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
      <Nav />
        {/* <Circle ref={circleRef} /> */}
        <Main />
        <LoaderMain />
        <LoaderMain />
      </div>
    </div>
  );
}

export default App;

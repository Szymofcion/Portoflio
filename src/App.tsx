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
    <>
      <Nav />
      {/* <Circle ref={circleRef} /> */}
      <Main />
      <LoaderMain />
      <LoaderMain />
    </>
  );
}

export default App;

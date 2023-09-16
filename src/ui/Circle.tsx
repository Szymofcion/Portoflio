// import gsap from "gsap";
// import { useRef, useImperativeHandle, forwardRef } from "react";
// import "./Circle.scss";

// const Circle = forwardRef((props, ref) => {
//   const el = useRef();

//   useImperativeHandle(
//     ref,
//     () => {
//       // return our API
//       return {
//         moveTo(x: unknown, y: unknown) {
//           gsap.to(el.current, { x, y });
//         },
//       };
//     },
//     []
//   );

//   return <div className="circle" ref={el}></div>;
// });

// export default Circle;

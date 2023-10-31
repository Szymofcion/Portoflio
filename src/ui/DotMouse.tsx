import "../components/style/Cursor.scss";
import useMousePosition from "./useMousePosition";

const DotRing = () => {
    // 1.
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        className="ring"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
      <div
        className="dot"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;
import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mouseMoveHandler = (event: { clientX: any; clientY: any }) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);
  }, []);

  return mousePosition;
};

export default useMousePosition;

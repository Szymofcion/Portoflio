import { useTheme } from "../components/context/ThemeContext";
import { BsSun } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
const ButtonColors = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      style={{ cursor: "pointer", width:"calc(50% + 4rem)" }}
      onClick={() => setTheme(theme === "purple" ? "dark" : "purple")}
    >
      <BsSun />
      <BsSunFill />
    </button>
  );
};

export default ButtonColors;

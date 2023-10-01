import { useTheme } from "../components/context/ThemeContext";

const ButtonColors = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "purple" ? "dark" : "purple")}>
      Switch Theme
    </button>
  );
};

export default ButtonColors;

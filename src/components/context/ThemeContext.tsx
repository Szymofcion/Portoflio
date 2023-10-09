/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface ThemeContextProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<string>(storedTheme || "purple");

  const updateTheme: React.Dispatch<React.SetStateAction<string>> = (
    newTheme: React.SetStateAction<string>
  ) => {
    setTheme(newTheme);
    if (typeof newTheme === "string") {
      localStorage.setItem("theme", newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

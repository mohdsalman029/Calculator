import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("darkTheme", theme === "dark");
  }, [theme]);

  const toggletheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggletheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export const useTheme = () => useContext(ThemeContext);

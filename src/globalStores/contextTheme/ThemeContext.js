import React, { createContext, useState, useContext, useMemo } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleCount = () => {
    setCount(count + 1);
  };

  const contextValue = useMemo(
    () => ({ theme, toggleTheme, count, toggleCount }),
    [theme, count]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {/* <ThemeContext.Provider value={{ theme, toggleTheme }}> */}
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

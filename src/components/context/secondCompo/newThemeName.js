import React from "react";
import { useTheme } from "../../../globalStores/contextTheme/ThemeContext";

const NewThemeName = () => {
  const { theme, toggleTheme } = useTheme();
  console.log("new");
  return (
    <div>
      <h1>NewThemeName: {theme}</h1>
      <button onClick={toggleTheme}>Update new theme</button>
    </div>
  );
};

export default NewThemeName;

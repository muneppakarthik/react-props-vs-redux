import React from "react";
import { useTheme } from "../../globalStores/contextTheme/ThemeContext";

export const ThemeUpdate = () => {
  const { toggleTheme } = useTheme();
  console.log("themename update");
  return (
    <div>
      <button onClick={toggleTheme}>Update theme</button>
    </div>
  );
};

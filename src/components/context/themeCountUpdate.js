import React from "react";
import { useTheme } from "../../globalStores/contextTheme/ThemeContext";

export const ThemeCountUpdate = () => {
  const { toggleCount } = useTheme();
  console.log("themecount update");
  return (
    <div>
      <button onClick={toggleCount}>Update count</button>
    </div>
  );
};

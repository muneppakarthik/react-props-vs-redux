import React from "react";
import { useTheme } from "../../globalStores/contextTheme/ThemeContext";

export const ThemeCount = () => {
  const { count } = useTheme();
  console.log("themecount compo");
  return (
    <div>
      <h1>Theme count: {count}</h1>
    </div>
  );
};

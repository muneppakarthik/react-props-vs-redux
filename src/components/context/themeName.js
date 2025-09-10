import React from "react";
import { useTheme } from "../../globalStores/contextTheme/ThemeContext";

export const ThemeName = () => {
  const { theme } = useTheme();
  console.log("themename compo");
  return (
    <div>
      <h1>Theme name: {theme}</h1>
    </div>
  );
};

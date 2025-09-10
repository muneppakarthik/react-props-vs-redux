import React from "react";
import { ThemeProvider } from "../../../globalStores/contextTheme/ThemeContext";
import NewThemeName from "./newThemeName";

const NewThemeApi = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>New theme Api</h1>
        <NewThemeName />
      </div>
    </ThemeProvider>
  );
};

export default NewThemeApi;

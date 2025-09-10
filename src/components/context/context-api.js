import React from "react";
import { ThemeProvider } from "../../globalStores/contextTheme/ThemeContext";
import { ThemeName } from "./themeName";
import { ThemeUpdate } from "./themeUpdate";
import { ThemeEmpty } from "./themeEmpty";
import { ThemeCount } from "./themeCount";
import { ThemeCountUpdate } from "./themeCountUpdate";

export const ContextApi = () => {
  return (
    <ThemeProvider>
      <h1>Context API Page</h1>
      <ThemeName />
      <ThemeUpdate />
      <ThemeEmpty />

      <hr />
      <ThemeCount />
      <ThemeCountUpdate />
    </ThemeProvider>
  );
};

import React, { useState, useEffect } from "react";

import { ThemeModeProvider } from "./context/ThemeModeProvider";
import { Theme, UseThemeContext } from "./context/ThemeModeContext";
import {   BrowserRouter as Router  } from "react-router-dom";

import RouterC from "./pages/Router"; 
import classnames from "classnames"; 
import "./App.css";

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };
  const isLightTheme = theme === Theme.Light;
  return (
    <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <div
        className={classnames({
          ["AppLight"]: isLightTheme,
          ["AppDark"]: !isLightTheme,
        })}
      >
        <Router>
          <RouterC />
          </Router>
      </div>
    </ThemeModeProvider>
  );
}

export default App;

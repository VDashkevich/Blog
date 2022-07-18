import React, { useState, useEffect } from "react";

import { ThemeModeProvider } from "./context/ThemeModeProvider";
import { Theme, UseThemeContext } from "./context/ThemeModeContext";
import { Provider } from "react-redux";
import Card from "./components/Card";
import classnames from "classnames";
import Tab from "./components/Tab";
import Pagination from "./components/Pagination";
import Button from "./components/Button";
import SignIn from "./pages/SignIn";
import MainLayout from "./components/MainLayout";
import BasicSelect from "./components/BasicSelect";
import "./App.css";
import Router from "./pages/Router";


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
        <Router />
      </div>
    </ThemeModeProvider>
  );
}

export default App;

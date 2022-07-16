import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "./redux/actions/postsActions/postsActions";
import { RootState } from "./redux/reducers/rootReducer";

import Header from "./components/Header";
import ContentPage from "./pages/ContentPage";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import Toggle from "./components/Toggle";
import { ThemeModeProvider } from "./context/ThemeModeProvider";
import { Theme, UseThemeContext } from "./context/ThemeModeContext";
import Router from "./pages/Router";
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
        <MainLayout/>
         <MainPage/>
      </div>
    </ThemeModeProvider>
  );
}

export default App;

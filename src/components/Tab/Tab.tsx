import classnames from "classnames";
import React, { FC, FocusEventHandler } from "react";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";
import "./Tab.css";

type TabProps = {};

const Tab: FC<TabProps> = ({}: any) => {
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  return (
    <div
      className={classnames({
        ["TabMainBoxLight"]: isLightTheme,
        ["TabMainBoxDark"]: !isLightTheme,
      })}
    >
      <div
        className={classnames({
          ["TabBoxLight"]: isLightTheme,
          ["TabBoxDark"]: !isLightTheme,
        })}
      >
        Articles
      </div>
      <div
        className={classnames({
          ["TabBoxLight"]: isLightTheme,
          ["TabBoxDark"]: !isLightTheme,
        })}
      >
        News
      </div>
    </div>
  );
};

export default Tab;

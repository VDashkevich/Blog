import React, { FC } from "react";
import "./Header.css";
import classnames from "classnames";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";

type HeaderProps = {};

const Header: FC<HeaderProps> = ({}: any) => {
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  return (
    <div
      className={classnames({
        ["HeaderMainBoxLight"]: isLightTheme,
        ["HeaderMainBoxDark"]: !isLightTheme,
      })}
    >
      <div className="HeaderLogo"></div>
      <div
        className={classnames({
          ["HeaderSearchLight"]: isLightTheme,
          ["HeaderSearchDark"]: !isLightTheme,
        })}
      >
        <input
          className={classnames({
            ["HeaderInputSearchLight"]: isLightTheme,
            ["HeaderInputSearchDark"]: !isLightTheme,
          })}
          type="text"
        />
        <i
          className={classnames({
            ["fa-solid fa-magnifying-glass iconLight"]: isLightTheme,
            ["fa-solid fa-magnifying-glass iconDark"]: !isLightTheme,
          })}
        ></i>
      </div>
      <div className="HeaderUser">
        <div className="HeaderUserIcon">
          <i className="fa-regular fa-user"></i>
        </div>
        <div
          className={classnames({
            ["HeaderUserNameLight"]: isLightTheme,
            ["HeaderUserNameDark"]: !isLightTheme,
          })}
        >
          Artem Malkin
        </div>
      </div>
    </div>
  );
};

export default Header;

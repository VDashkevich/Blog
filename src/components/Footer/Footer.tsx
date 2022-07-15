import classnames from "classnames";
import React, { FC, FocusEventHandler } from "react";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";
import Toggle from "../Toggle";
import "./Footer.css";

type FooterProps = {};

const Footer: FC<FooterProps> = ({}: any) => {
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  return (
    <div
      className={classnames({
        ["MainContainerFooterLight"]: isLightTheme,
        ["MainContainerFooterDark"]: !isLightTheme,
      })}
    >
      <div className="FooterCopywriter">© 2022 Blogolog</div>
      <div className="FooterCheckBox">
        <div className="FooterCheckBoxTitle">Dark theme</div>
        <div className="FooterCheckBoxButton">
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default Footer;

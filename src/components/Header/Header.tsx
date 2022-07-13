import React, { FC } from "react";
import "./Header.css";
import classnames from "classnames";

type HeaderProps = {};

const Header: FC<HeaderProps> = ({}: any) => {
  return (
    <div className="HeaderMainBox">
      <div className="HeaderLogo"></div>
      <div className="HeaderSearch">
        <input className="HeaderInputSearch" type="text" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="HeaderUser">
        <div className="HeaderUserIcon">
          <i className="fa-regular fa-user"></i>
        </div>
        <div className="HeaderUserName">Artem Malkin</div>
      </div>
    </div>
  );
};

export default Header;

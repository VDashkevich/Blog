import classnames from "classnames";
import React, { FC } from "react";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";
import "./Button.css";

type ButtonProps = {
  onClick?: (event: any) => void;
  className?: string;
  btnContent: any;
  disabled?: boolean;
  value?: any;
  active?: boolean;
};

const Button: FC<ButtonProps> = ({
  className,
  onClick,
  btnContent,
  disabled,
  value,
  active,
}) => {
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      value={value}
      className={`${className} ${active ? "active" : ""}`}
    >
      {btnContent}
    </button>
  );
};

export default Button;

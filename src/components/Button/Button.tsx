import classnames from "classnames";
import React, { FC } from "react";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";
import "./Button.css";

type ButtonProps = {
  onClick?: (event: any) => void;
  className?: string;
  btnContent: any;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({
  className,
  onClick,
  btnContent,
  disabled,
}) => {
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  return (
    <button disabled={disabled} onClick={onClick}
    className={className}>
      {btnContent}
    </button>
  );
};

export default Button;

import classnames from "classnames";
import React, { FC, FocusEventHandler } from "react";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";
import "./Input.css";

type InputProps = {
  type: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
};

const Input: FC<InputProps> = ({
  type,
  disabled,
  className,
  placeholder,
}: any) => {
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;

  return (
    <input
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      className={classnames({
        ["InputLight"]: isLightTheme,
        ["InputDark"]: !isLightTheme,
      })}
    />
  );
};

export default Input;

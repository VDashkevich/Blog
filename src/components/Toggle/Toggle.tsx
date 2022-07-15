import React, { useState } from "react";
import "./Toggle.css";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";

const Toggle = () => {
  const { theme, onChangeTheme = () => {} } = UseThemeContext();

  const onClickTheme = () => {
    onChangeTheme(theme === "light" ? Theme.Dark : Theme.Light);
  };

  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);
  return (
    <label className="toggle-switch">
      <input onClick={() => onClickTheme()} type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
};

export default Toggle;

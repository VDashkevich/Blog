import React, { FC } from "react";
import "./Pagination.css";
import classnames from "classnames";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";

type PaginationProps = {};

const Pagination: FC<PaginationProps> = ({}: any) => {
  const imgPost =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xPwQFMwqQNGPSrW3NBueZixbwKsnVSogOA&usqp=CAU";
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  return (
    <div
      className={classnames({
        ["PagMainBoxLight"]: isLightTheme,
        ["PagMainBoxDark"]: !isLightTheme,
      })}
    >
      <div className="PagNavBox">
        <span
          className={classnames({
            ["fa-solid fa-arrow-left-long PagIconLight"]: isLightTheme,
            ["fa-solid fa-arrow-left-long PagIconDark"]: !isLightTheme,
          })}
        ></span>
        <div
          className={classnames({
            ["PagTextLight"]: isLightTheme,
            ["PagTextDark"]: !isLightTheme,
          })}
        >
          Prev
        </div>
      </div>
      <div
        className={classnames({
          ["PagNumBoxLight"]: isLightTheme,
          ["PagNumBoxDark"]: !isLightTheme,
        })}
      >
        <div className="PagNumber">1</div>
        <div className="PagNumber">2</div>
        <div className="PagNumber">3</div>
        <div className="PagNumber">...</div>
        <div className="PagNumber">6</div>
      </div>
      <div className="PagNavBox">
        <div
          className={classnames({
            ["PagTextLight"]: isLightTheme,
            ["PagTextDark"]: !isLightTheme,
          })}
        >
          Next
        </div>
        <span
          className={classnames({
            ["fa-solid fa-arrow-right-long PagIconLight"]: isLightTheme,
            ["fa-solid fa-arrow-right-long PagIconDark"]: !isLightTheme,
          })}
        ></span>
      </div>
    </div>
  );
};

export default Pagination;

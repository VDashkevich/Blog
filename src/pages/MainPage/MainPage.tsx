import React, { FC, FocusEventHandler } from "react";
import "./MainPage.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Tab from "../../components/Tab";
import Pagination from "../../components/Pagination";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";
import classnames from "classnames";

type MainPageProps = {};

const MainPage: FC<MainPageProps> = ({}: any) => {
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  return (
    <div
      className={classnames({
        ["MainBoxLight"]: isLightTheme,
        ["MainBoxDark"]: !isLightTheme,
      })}
    >
      <div
        className={classnames({
          ["MainTitleLight"]: isLightTheme,
          ["MainTitleDark"]: !isLightTheme,
        })}
      >
        Blog
      </div>
      <div className="MainTab">
        <Tab />
      </div>
      <div className="MainSort">
        <div className="MainSortButtons">
          <div
            className={classnames({
              ["MainSortButtonIconLight"]: isLightTheme,
              ["MainSortButtonIconDark"]: !isLightTheme,
            })}
          >
            Day
          </div>
          <div
            className={classnames({
              ["MainSortButtonIconLight"]: isLightTheme,
              ["MainSortButtonIconDark"]: !isLightTheme,
            })}
          >
            Week
          </div>
          <div
            className={classnames({
              ["MainSortButtonIconLight"]: isLightTheme,
              ["MainSortButtonIconDark"]: !isLightTheme,
            })}
          >
            Month
          </div>
          <div
            className={classnames({
              ["MainSortButtonIconLight"]: isLightTheme,
              ["MainSortButtonIconDark"]: !isLightTheme,
            })}
          >
            Year
          </div>
        </div>
        <div className="MainSortTab"></div>
      </div>
      <div className="MainPosts">
        <Card
          id={"0"}
          image={""}
          text={
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
          }
          date={"April 20, 2021"}
        />
        <Card
          id={"0"}
          image={""}
          text={
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
          }
          date={"April 20, 2021"}
        />
        <Card
          id={"0"}
          image={""}
          text={
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
          }
          date={"April 20, 2021"}
        />
      </div>
      <div className="MainPagination">
        <Pagination />
      </div>
    </div>
  );
};

export default MainPage;

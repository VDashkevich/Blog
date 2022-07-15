import React, { FC, FocusEventHandler } from "react";
import "./SearchPage.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Tab from "../../components/Tab";
import Pagination from "../../components/Pagination";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";
import classnames from "classnames";

type SearchPageProps = {};

const SearchPage: FC<SearchPageProps> = ({}: any) => {
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  return (
    <div
      className={classnames({
        ["SearchMainMainBoxLight"]: isLightTheme,
        ["SearchMainMainBoxDark"]: !isLightTheme,
      })}
    >
      <div
        className={classnames({
          ["SearchPageTitleLight"]: isLightTheme,
          ["SearchPageTitleDark"]: !isLightTheme,
        })}
      >
        Search results ‘Astronauts’
      </div>

      <div className="SearchPagePosts">
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
      <div className="SearchPagePagination">
        <Pagination />
      </div>
    </div>
  );
};

export default SearchPage;

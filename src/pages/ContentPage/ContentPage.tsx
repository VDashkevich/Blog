import React, { FC, FocusEventHandler } from "react";
import "./ContentPage.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";
import classnames from "classnames";

type ContentPageProps = {};

const ContentPage: FC<ContentPageProps> = ({}: any) => {
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  return (
    <div
      className={classnames({
        ["ContentPageMainBoxLight"]: isLightTheme,
        ["ContentPageMainBoxDark"]: !isLightTheme,
      })}
    >
      <div className="ContentPageLink">
        <span
          className={classnames({
            ["ContentPageLinkMainLight"]: isLightTheme,
            ["ContentPageLinkMainDark"]: !isLightTheme,
          })}
        >
          Home
        </span>
        <span
          className={classnames({
            ["ContentPageLinkSecondaryLight"]: isLightTheme,
            ["ContentPageLinkSecondaryDark"]: !isLightTheme,
          })}
        >
          / Post 14278
        </span>
      </div>
      <div
        className={classnames({
          ["ContentPageTitleLight"]: isLightTheme,
          ["ContentPageTitleDark"]: !isLightTheme,
        })}
      >
        Astronauts prep for new solar arrays on nearly seven-hour spacewalk
      </div>
      <div className="ContentPageImage"></div>
      <div
        className={classnames({
          ["ContentPageTextLight"]: isLightTheme,
          ["ContentPageTextDark"]: !isLightTheme,
        })}
      >
        Astronauts Kayla Barron and Raja Chari floated out of the International
        Space Station airlock for a spacewalk Tuesday, installing brackets and
        struts to support new solar arrays to upgrade the research lab’s power
        system on the same day that crewmate Mark Vande Hei marked his 341st day
        in orbit, a U.S. record for a single spaceflight.
      </div>
      <div className="ContentPageShare">
        <div
          className={classnames({
            ["ContentPageShareIconLight"]: isLightTheme,
            ["ContentPageShareIconDark"]: !isLightTheme,
          })}
        >
          <i className="fa-brands fa-facebook-f"></i>
        </div>
        <div
          className={classnames({
            ["ContentPageShareIconLight"]: isLightTheme,
            ["ContentPageShareIconDark"]: !isLightTheme,
          })}
        >
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div
          className={classnames({
            ["ContentPageShareIconLight"]: isLightTheme,
            ["ContentPageShareIconDark"]: !isLightTheme,
          })}
        >
          <i className="fa-regular fa-circle"></i>
        </div>
      </div>
      <div className="ContentPagePosts">
        <Card
          id={"0"}
          image={""}
          text={
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
          }
          date={"April 20, 2021"}
        />
        <Card
          id={"1"}
          image={""}
          text={
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
          }
          date={"April 20, 2021"}
        />
        <Card
          id={"1"}
          image={""}
          text={
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
          }
          date={"April 20, 2021"}
        />
      </div>
    </div>
  );
};

export default ContentPage;

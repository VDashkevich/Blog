import React, { FC } from "react";
import classnames from "classnames";
import { Route, Link, Routes, useParams } from "react-router-dom";
import { Theme, UseThemeContext } from "./../../context/ThemeModeContext";
import "./Card.css";
type CardProps = {
  id: string;
  image: string;
  text: string;
  date: string;
};

const PostCard: FC<CardProps> = ({ id, image, text, date }) => {
  const imgPost =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xPwQFMwqQNGPSrW3NBueZixbwKsnVSogOA&usqp=CAU";
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;

  function newDateFormat(date: string) {
    const b = new Date(date).toString().slice(4, 15);
    return b;
  }
  return (
    <Link className="postContentMain" to={`/content/${id}`}>
      <div
        className={classnames({
          ["postContentLight"]: isLightTheme,
          ["postContentDark"]: !isLightTheme,
        })}
      >
        <div className="postImgBorder">
          <img src={image ? image : imgPost} className="postImg" />
          <div className="postImgBox"></div>
        </div>
        <div className="footerCard">
          <div
            className={classnames({
              ["postsDateLight"]: isLightTheme,
              ["postsDateDark"]: !isLightTheme,
            })}
          >
            {newDateFormat(date)}
          </div>
          <div
            className={classnames({
              ["postsTextLight"]: isLightTheme,
              ["postsTextDark"]: !isLightTheme,
            })}
          >
            {text}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;

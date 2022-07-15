import React, { FC } from "react";
import "./Card.css";
import classnames from "classnames";
import { Theme, UseThemeContext } from "./../../context/ThemeModeContext";

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
  return (
    <div>
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
            {date}
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
    </div>
  );
};

export default PostCard;

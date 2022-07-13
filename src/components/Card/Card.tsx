import React, { FC } from "react";
import "./Card.css";
import classnames from "classnames";

type CardProps = {
  id: string;
  image: string;
  text: string;
  date: string;
};

const PostCard: FC<CardProps> = ({ id, image, text, date }) => {
  const imgPost =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xPwQFMwqQNGPSrW3NBueZixbwKsnVSogOA&usqp=CAU";

  return (
    <div>
      <div className="postContent">
        <div className="postImgBorder">
          <img src={image ? image : imgPost} className="postImg" />
          <div className="postImgBox"></div>
        </div>
        <div className="footerCard">
          <div className="postsDate">{date}</div>
          <div className="postsText">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

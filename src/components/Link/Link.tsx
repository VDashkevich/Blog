import React, { FC } from "react";
import "./Link.css";
import classnames from "classnames";

type LinkProps = {
  text: string;
};

const Link: FC<LinkProps> = ({ text }: any) => {
  return <div className="LinkMainBox">{text}</div>;
};

export default Link;

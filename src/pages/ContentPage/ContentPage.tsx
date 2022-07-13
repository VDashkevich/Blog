import React, { FC, FocusEventHandler } from "react";
import "./ContentPage.css";
import Input from "../../components/Input"
import Button from "../../components/Button"

type ContentPageProps = {
  type: string;
};

const ContentPage: FC<ContentPageProps> = ({ }: any) => {
  return <div className="TabMainBox">
    <div className="TabBox_active">Articles</div>
    <div className="TabBox">News</div>
  </div>;
};

export default ContentPage;

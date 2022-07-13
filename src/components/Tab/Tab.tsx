import React, { FC, FocusEventHandler } from "react";
import "./Tab.css";

type TabProps = {
  type: string;
};

const Tab: FC<TabProps> = ({ }: any) => {
  return <div className="TabMainBox">
    <div className="TabBox_active">Articles</div>
    <div className="TabBox">News</div>
  </div>;
};

export default Tab;

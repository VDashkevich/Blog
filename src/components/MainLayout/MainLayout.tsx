import React, { FC } from "react";
import "./MainLayout.css";
import classnames from "classnames";
import Header from "../Header";
import Footer from "../Footer";

type MainLayoutProps = {};

const MainLayout: FC<MainLayoutProps> = ({}: any) => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default MainLayout;

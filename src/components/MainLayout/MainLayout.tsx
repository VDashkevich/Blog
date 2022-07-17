import React, { FC } from "react";
import "./MainLayout.css";
import classnames from "classnames";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

type MainLayoutProps = {};

const MainLayout: FC<MainLayoutProps> = ({}: any) => {
  return (
    <div>
      <Header />
      <div className="mainContent">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

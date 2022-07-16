import React, { FC } from "react";
import "./MainLayout.css";
import classnames from "classnames";
import Header from "../Header";
import Footer from "../Footer";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";


type MainLayoutProps = {};

const MainLayout: FC<MainLayoutProps> = ({}: any) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

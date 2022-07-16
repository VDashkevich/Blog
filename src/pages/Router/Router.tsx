import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import SearchPage from "../SearchPage";
import MainPage from "../MainPage";
import ContentPage from "../ContentPage";
import SignIn from "../SignIn";
import MainLayout from "../../components/MainLayout";

const RouterC = () => {
  const dispatch = useDispatch();

  return (
       <Routes>
        <Route  path="/" element={<MainLayout />}>      
         <Route path={"main-page"}  element={<MainPage />}>
            <Route path={":id"} element={<ContentPage />} />
          </Route>
          <Route path={"test"} element={<SignIn />}></Route>
        </Route>
      </Routes>
  );
};

export default RouterC;

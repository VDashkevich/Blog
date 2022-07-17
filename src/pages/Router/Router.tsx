import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Route,
  Routes,
  Navigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import SearchPage from "../SearchPage";
import MainPage from "../MainPage";
import ContentPage from "../ContentPage";
import SignIn from "../SignIn";
import MainLayout from "../../components/MainLayout";

const Router = () => {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<MainPage />}></Route>
          <Route path={"/content/:id"} element={<ContentPage />} />
          <Route path={"/search"} element={<SearchPage />} />
          <Route path={"test"} element={<SignIn />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

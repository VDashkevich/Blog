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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const Router = () => {

  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route path={"/sign-in"} element={<SignIn />}></Route> 
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/" element={<MainPage />}></Route>
              <Route path={"/content/:id"} element={<ContentPage />} />
              <Route path={"/search"} element={<SearchPage />} />
              <Route path='*' element={<Navigate to ='/'/>}/>
            </Route>
          </Route>
        </Routes> 
    </BrowserRouter>
  );
};

export default Router;

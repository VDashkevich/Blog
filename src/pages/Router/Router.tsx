import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import SearchPage from "../SearchPage";
import MainPage from "../MainPage";
import ContentPage from "../ContentPage";
import SignIn from "../SignIn";

const Router = () => {
  // const isLoggedIn = useSelector(AuthSelector.getLogStatus);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(getUserInfo(""));
  //   }
  // }, [isLoggedIn]);
  return (
    <></>
    // <BrowserRouter>
    //   {isLoggedIn ? (
    //     <Routes>
    //       <Route path={"/"} element={<HeaderPages />}>
    //         <Route
    //           path={"/cards-list"}
    //           element={<MyPosts isPersonal={false} />}
    //         ></Route>
    //         <Route
    //           path={"/cards-list-my"}
    //           element={<MyPosts isPersonal />}
    //         ></Route>
    //         <Route path={"/cards-list-my/:id"} element={<ContentTitle />} />

    //         <Route path={"/cards-list/:id"} element={<ContentTitle />} />
    //         <Route path={"/add-post"} element={<AddPost />} />

    //         <Route path={"/info"} element={<Information />}></Route>
    //       </Route>
    //       <Route path={"*"} element={<Navigate to={"/cards-list"} replace />} />
    //     </Routes>
    //   ) : (
    //     <Routes>
    //       <Route path={"/auth"} element={<Authorization />} />
    //       <Route path={"/activate/:uuid/:token"} element={<Confirmation />} />

    //       <Route path={"*"} element={<Navigate to={"/auth"} replace />} />
    //     </Routes>
    //   )}
    // </BrowserRouter>
  );
};

export default Router;

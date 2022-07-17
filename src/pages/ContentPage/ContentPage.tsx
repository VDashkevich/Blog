import React, { FC, FocusEventHandler, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Route, Link, Routes, useParams} from 'react-router-dom';
import { fetchPostByIdRequest } from "../../redux/actions/postsActions/postsActions";
import { RootState } from "../../redux/reducers/rootReducer";
import "./ContentPage.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";
import classnames from "classnames";

type ContentPageProps = {};

const ContentPage: FC<ContentPageProps> = ({}: any) => {
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
    // 👇️ get ID from url
    const params = useParams();
  const dispatch = useDispatch();
  const {
    posts: { pending, selectedPost, error },
    pagination: { currentPage, itemsPerPage },
  } = useSelector((state: RootState) => state);
  useEffect(() => {
    if(params.id) {
       dispatch(fetchPostByIdRequest(Number(params.id)));  
    }
   
  }, []);
  console.log(selectedPost)
 
  return (
    <>
     {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div
        className={classnames({
          ["ContentPageMainBoxLight"]: isLightTheme,
          ["ContentPageMainBoxDark"]: !isLightTheme,
        })}
      >
        <div className="ContentPageLink">
          <span
            className={classnames({
              ["ContentPageLinkMainLight"]: isLightTheme,
              ["ContentPageLinkMainDark"]: !isLightTheme,
            })}
          >
            Home
          </span>
          <span
            className={classnames({
              ["ContentPageLinkSecondaryLight"]: isLightTheme,
              ["ContentPageLinkSecondaryDark"]: !isLightTheme,
            })}
          >
            / Post {selectedPost?.id}
          </span>
        </div>
        <div
          className={classnames({
            ["ContentPageTitleLight"]: isLightTheme,
            ["ContentPageTitleDark"]: !isLightTheme,
          })}
        >
          {selectedPost?.title}
        </div>
        {/* <div className="ContentPageImage"></div> */}
        <img src={selectedPost?.imageUrl} alt={selectedPost?.title} />
        <div
          className={classnames({
            ["ContentPageTextLight"]: isLightTheme,
            ["ContentPageTextDark"]: !isLightTheme,
          })}
        >
         {selectedPost?.summary}
        </div>
        <div className="ContentPageShare">
          <div
            className={classnames({
              ["ContentPageShareIconLight"]: isLightTheme,
              ["ContentPageShareIconDark"]: !isLightTheme,
            })}
          >
            <i className="fa-brands fa-facebook-f"></i>
          </div>
          <div
            className={classnames({
              ["ContentPageShareIconLight"]: isLightTheme,
              ["ContentPageShareIconDark"]: !isLightTheme,
            })}
          >
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div
            className={classnames({
              ["ContentPageShareIconLight"]: isLightTheme,
              ["ContentPageShareIconDark"]: !isLightTheme,
            })}
          >
            <i className="fa-regular fa-circle"></i>
          </div>
        </div>
        <div className="ContentPagePosts">
          <Card
            id={"0"}
            image={""}
            text={
              "Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
            }
            date={"April 20, 2021"}
          />
          <Card
            id={"1"}
            image={""}
            text={
              "Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
            }
            date={"April 20, 2021"}
          />
          <Card
            id={"1"}
            image={""}
            text={
              "Astronauts prep for new solar arrays on nearly seven-hour spacewalk"
            }
            date={"April 20, 2021"}
          />
        </div>
      </div>
      )}
    </>

          );
};

export default ContentPage;

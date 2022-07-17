import React, { FC, FocusEventHandler, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Link, Routes, useParams } from "react-router-dom";
import { fetchPostByIdRequest } from "../../redux/actions/postsActions/postsActions";
import { RootState } from "../../redux/reducers/rootReducer";
import "./ContentPage.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";
import classnames from "classnames";
import { IPost } from "../../models/IPost";

type ContentPageProps = {};

const ContentPage: FC<ContentPageProps> = ({}: any) => {
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  // 👇️ get ID from url
  const params = useParams();
  const dispatch = useDispatch();
  const {
    posts: { pending, selectedPost, error, posts },
    pagination: { currentPage, itemsPerPage },
  } = useSelector((state: RootState) => state);
  useEffect(() => {
    if (params.id) {
      dispatch(fetchPostByIdRequest(Number(params.id)));
    }
  }, [params.id]);

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
            <Link
              className={classnames({
                ["ContentPageLinkMainLight"]: isLightTheme,
                ["ContentPageLinkMainDark"]: !isLightTheme,
              })}
              to="/"
            >
              Home
            </Link>
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
            {posts?.slice(0, 3).map((item: IPost, index: number) => (
              <Card
                key={item.id}
                id={`${item.id}`}
                image={`${item.imageUrl}`}
                text={item.title}
                date={`${item.publishedAt}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ContentPage;

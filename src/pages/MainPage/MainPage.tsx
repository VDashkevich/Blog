import React, { FC, FocusEventHandler, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "../../redux/actions/postsActions/postsActions";
import { RootState } from "../../redux/reducers/rootReducer";
import BasicSelect from "../../components/BasicSelect";
import "./MainPage.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Tab from "../../components/Tab";
import Pagination from "../../components/Pagination";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";
import classnames from "classnames";
import { IPost } from "../../models/IPost";

type MainPageProps = {};

const MainPage: FC<MainPageProps> = ({}: any) => {
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  const dispatch = useDispatch();
  const {
    posts: { pending, posts, error },
    pagination: { currentPage, itemsPerPage },
  } = useSelector((state: RootState) => state);
  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  return (
    <>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div
          className={classnames({
            ["MainBoxLight"]: isLightTheme,
            ["MainBoxDark"]: !isLightTheme,
          })}
        >
          <div
            className={classnames({
              ["MainTitleLight"]: isLightTheme,
              ["MainTitleDark"]: !isLightTheme,
            })}
          >
            Blog
          </div>
          <div className="MainSort">
            <div className="MainSortButtons">
              <div
                className={classnames({
                  ["MainSortButtonIconLight"]: isLightTheme,
                  ["MainSortButtonIconDark"]: !isLightTheme,
                })}
              >
                Day
              </div>
              <div
                className={classnames({
                  ["MainSortButtonIconLight"]: isLightTheme,
                  ["MainSortButtonIconDark"]: !isLightTheme,
                })}
              >
                Week
              </div>
              <div
                className={classnames({
                  ["MainSortButtonIconLight"]: isLightTheme,
                  ["MainSortButtonIconDark"]: !isLightTheme,
                })}
              >
                Month
              </div>
              <div
                className={classnames({
                  ["MainSortButtonIconLight"]: isLightTheme,
                  ["MainSortButtonIconDark"]: !isLightTheme,
                })}
              >
                Year
              </div>
            </div>
            <div className="MainSortTab">
              <BasicSelect />
            </div>
          </div>
          <div className="MainPosts">
            {posts?.map((item: IPost, index: number) => (
              <Card
                key={item.id}
                id={`${item.id}`}
                image={`${item.imageUrl}`}
                text={item.title}
                date={`${item.publishedAt}`}
              />
            ))}
          </div>
          <div className="MainPagination">
            <Pagination />
          </div>
        </div>
      )}
    </>
  );
};

export default MainPage;

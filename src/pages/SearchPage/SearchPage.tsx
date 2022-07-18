import React, { FC, FocusEventHandler, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "../../redux/actions/postsActions/postsActions";
import { RootState } from "../../redux/reducers/rootReducer";
import "./SearchPage.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Tab from "../../components/Tab";
import Pagination from "../../components/Pagination";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";
import classnames from "classnames";
import { Route, Link, Routes, useSearchParams } from "react-router-dom";
import { IPost } from "../../models/IPost";

type SearchPageProps = {};

const SearchPage: FC<SearchPageProps> = ({}: any) => {
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    posts: { pending, posts, error },
    pagination: { currentPage, itemsPerPage },
  } = useSelector((state: RootState) => state);

  return (
    <div
      className={classnames({
        ["SearchMainMainBoxLight"]: isLightTheme,
        ["SearchMainMainBoxDark"]: !isLightTheme,
      })}
    >
      <div
        className={classnames({
          ["SearchPageTitleLight"]: isLightTheme,
          ["SearchPageTitleDark"]: !isLightTheme,
        })}
      >
        Search results{" "}
        {searchParams.get("title_contains")
          ? `"${searchParams.get("title_contains")}"`
          : null}
      </div>

      <div className="SearchPagePosts">
        {posts.length
          ? posts?.map((item: IPost, index: number) => (
              <Card
                key={item.id}
                id={`${item.id}`}
                image={`${item.imageUrl}`}
                text={item.title}
                date={`${item.publishedAt}`}
              />
            ))
          : "No results"}
      </div>
      <div className="SearchPagePagination">
        <Pagination />
      </div>
    </div>
  );
};

export default SearchPage;

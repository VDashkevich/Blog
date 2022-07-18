import React, { FC, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  incrementPaginationActions,
  decrementPaginationActions,
} from "../../redux/actions/paginationActions/paginationActions";
import { RootState } from "../../redux/reducers/rootReducer";

import "./Pagination.css";
import classnames from "classnames";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";
import { Route, Link, Routes, useSearchParams } from "react-router-dom";

type PaginationProps = {};

const Pagination: FC<PaginationProps> = ({}: any) => {
  const imgPost =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xPwQFMwqQNGPSrW3NBueZixbwKsnVSogOA&usqp=CAU";
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    pagination: { pending, currentPage, error, itemsPerPage },
    posts: { posts },
  } = useSelector((state: RootState) => state);
  const filter = searchParams.get("title_contains");

  const dispatch = useDispatch();

  useEffect(() => getPages(), [posts]);

  const setNextPage = () => {
    dispatch(incrementPaginationActions());
  };
  const setPrevPage = () => {
    dispatch(decrementPaginationActions());
  };

  const getPages = () => {
    const postLength = filter && posts.length < 12 ? posts.length : 50;
    setTotalPages(Math.ceil(postLength / itemsPerPage));
  };

  return (
    <div
      className={classnames({
        ["PagMainBoxLight"]: isLightTheme,
        ["PagMainBoxDark"]: !isLightTheme,
      })}
    >
      <div className="PagNavBox">
        <button
          type="button"
          className={classnames({
            ["PagTextLight"]: isLightTheme,
            ["PagTextDark"]: !isLightTheme,
          })}
          onClick={setPrevPage}
          disabled={currentPage === 1}
        >
          <span
            className={classnames({
              ["fa-solid fa-arrow-left-long PagIconLight"]: isLightTheme,
              ["fa-solid fa-arrow-left-long PagIconDark"]: !isLightTheme,
            })}
          ></span>
          Prev
        </button>
      </div>
      <div
        className={classnames({
          ["PagNumBoxLight"]: isLightTheme,
          ["PagNumBoxDark"]: !isLightTheme,
        })}
      >
        {[...Array(totalPages)].map((e, i) => (
          <div
            className={classnames("PagNumber", {
              active: currentPage === i + 1,
            })}
            key={i}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="PagNavBox">
        <button
          type="button"
          className={classnames({
            ["PagTextLight"]: isLightTheme,
            ["PagTextDark"]: !isLightTheme,
          })}
          onClick={setNextPage}
          disabled={currentPage === totalPages}
        >
          Next
          <span
            className={classnames({
              ["fa-solid fa-arrow-right-long PagIconLight"]: isLightTheme,
              ["fa-solid fa-arrow-right-long PagIconDark"]: !isLightTheme,
            })}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;

import React, { FC } from "react";
import "./Pagination.css";
import classnames from "classnames";

type PaginationProps = {

};

const Pagination: FC<PaginationProps> = ({ }: any) => {
  const imgPost =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xPwQFMwqQNGPSrW3NBueZixbwKsnVSogOA&usqp=CAU";

  return (
    <div className="PagMainBox">
      <div className="PagNavBox">
        <span className="fa-solid fa-arrow-left-long PagIcon"></span>
        <div className="PagText">Prev</div>
      </div>
      <div className="PagNumBox">
        <div className="PagNumber">1</div>
        <div className="PagNumber">2</div>
        <div className="PagNumber">3</div>
        <div className="PagNumber">...</div>
        <div className="PagNumber">6</div>
      </div>
      <div className="PagNavBox">
        <div className="PagText">Next</div>
        <span className="fa-solid fa-arrow-right-long PagIcon"></span>
      </div>
    </div>
  );
};

export default Pagination;

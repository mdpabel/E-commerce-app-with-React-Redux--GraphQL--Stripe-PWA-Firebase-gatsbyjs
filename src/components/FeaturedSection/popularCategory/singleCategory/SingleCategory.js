import React from "react";

import "./SingleCategory.css";
import { Link } from "react-router-dom";

const SingleCategory = ({ title, img, routeName }) => {
  return (
    <div>
      <div className="category_container">
        <div className="category_text">
          <p className="category_title">{title}</p>
          <Link to={routeName} className="btn category_button">
            Source now
          </Link>
        </div>
        <div className="category_image">
          <img width="60px" src={img} alt="CategoryImage_1" />
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;

import React from "react";
import { Link } from "react-router-dom";

import "./Product-category.css";

const ProductCategory = ({ imageUrl, title, discount, routeName }) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
      <div className="card product">
        <Link className="card-img-top product_img" to={`/${routeName}`}>
          <img
            style={{ width: "220px" }}
            src={imageUrl}
            className="card-img-top product_img"
            alt="category_alt"
          />
        </Link>
        <div className="card-body product_text">
          <h5 className="card-title product_title">{title}</h5>
          <div className="product_discount">
            <span className="discount_number">{discount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;

import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { connect } from "react-redux";

import "./Product.css";
import { Link } from "react-router-dom";
import { increaseItem } from "../../redux/cart/cart.action";

const Product = ({ item, handleCartItems }) => {
  const {
    imageUrl,
    name,
    subtitle,
    alt,
    discount,
    price,
    styles,
    width,
  } = item;

  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
      <div className="card product">
        <Link className="card-img-top product_img" to="/">
          <img
            style={{ width: width }}
            src={imageUrl}
            className="card-img-top product_img"
            alt={alt}
          />
        </Link>
        <div className="card-body product_text">
          <h5 className="card-title product_title">{name}</h5>
          <p className="card-text product_subtitle">{subtitle}</p>
          <div className={discount ? "product_discount" : null}>
            <span className="discount_number">{discount}</span>
          </div>
          <div style={styles} className="product_footer">
            <span className="product_price">${price}</span>
            <button
              onClick={() => handleCartItems(item)}
              className="btn btn-sm btn-primary"
            >
              Add to cart <FaCartPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCartItems: (item) => dispatch(increaseItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);

Product.defaultProps = {
  width: "200px",
};

import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { connect } from "react-redux";

import "./checkout.item.css";
import {
  increaseItem,
  decreaseItem,
  removeItem,
} from "../../redux/cart/cart.action";

const CheckOutItem = ({
  item,
  onIncrementItem,
  onDecrementItem,
  onRemoveItem,
}) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <>
      <td>
        <div className="checkout__product">
          <div className="product_img">
            <img width="50px" src={imageUrl} alt={name} />
          </div>
          <div className="product_title">
            <Link to="/" className="title text-dark checkoutTitle">
              {name}
            </Link>
          </div>
        </div>
      </td>

      <td className="checkout__quantity">
        <span className="decrease__item">
          <FaPlus onClick={() => onIncrementItem(item)} />
        </span>
        {quantity}
        <span className="increase__item">
          <FaMinus onClick={() => onDecrementItem(item)} />
        </span>
      </td>
      <td className="checkout__total">${price}</td>
      <td onClick={() => onRemoveItem(item)} className="checkout__remove__item">
        X
      </td>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementItem: (item) => dispatch(increaseItem(item)),
    onDecrementItem: (item) => dispatch(decreaseItem(item)),
    onRemoveItem: (item) => dispatch(removeItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CheckOutItem);

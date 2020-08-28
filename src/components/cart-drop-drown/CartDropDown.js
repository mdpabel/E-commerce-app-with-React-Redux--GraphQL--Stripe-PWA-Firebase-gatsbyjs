import React from "react";
import { connect } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./cardDropDown.css";
import CartItem from "../cart-item/Cart.items";
import {
  selectCartItems,
  selectTotalCartItem,
} from "../../redux/cart/cart.select";
import { toogleCart } from "../../redux/cart/cart.action";
import { selectTotalAmount } from "../../redux/cart/cart.select";

const CartDropDown = ({
  cartItems,
  totalItem,
  history,
  cartToggle,
  cartTotal,
}) => {
  const handleCheckout = () => {
    history.push("/checkout");
    cartToggle();
  };

  return (
    <div className="card card__drop__down ml-auto">
      <div className="card-body">
        <div className="row total-header-section ">
          <div className="col-lg-6 col-sm-6 col-6">
            <FaShoppingCart />
            <span className="badge badge-pill badge-danger">{totalItem}</span>
          </div>
          <div className="col-lg-6 col-sm-6 col-6 total-section text-right">
            <p>
              Total: <span className="text-info">${cartTotal}</span>
            </p>
          </div>
        </div>

        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <p className="alert alert-info my-5" role="alert">
            Your cart is empty!!
          </p>
        )}

        <div className="row checkout__button">
          <div className="col-lg-12 col-sm-12 col-12 text-center checkout">
            <button
              title="Add item to cart"
              disabled={cartItems.length ? false : true}
              onClick={handleCheckout}
              className="btn drop__down__btn btn-block"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalItem: selectTotalCartItem,
  cartTotal: selectTotalAmount,
});

const mapDispatchToProps = (dispatch) => {
  return {
    cartToggle: () => dispatch(toogleCart()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
);

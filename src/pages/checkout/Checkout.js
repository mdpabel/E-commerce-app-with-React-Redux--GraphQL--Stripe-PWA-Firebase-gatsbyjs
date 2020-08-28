import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckOutItem from "../../components/checkout-item/checkout.item";
import "./checkout.css";
import {
  selectCartItems,
  selectTotalAmount,
} from "../../redux/cart/cart.select";
import { removeItems } from "../../redux/cart/cart.action";

const Checkout = ({ cartItems, totalAmount, history, onClearCart }) => {
  return (
    <div className="checkout__wrapper">
      <div className="row">
        <div className="container">
          <div className="col">
            <div className="table-responsive">
              <table className="table">
                <thead className="text-muted">
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove Item</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item) => (
                    <tr className="table__row">
                      <CheckOutItem key={item.id} item={item} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout__footer">
        {cartItems.length && (
          <div className="clear__checkout__items col-5 mx-auto">
            <button onClick={onClearCart} className="btn btn-danger btn-block">
              CLEAR CART
            </button>
          </div>
        )}
        <div className="continue__shopping__button">
          {cartItems.length ? null : (
            <>
              <p className="alert alert-info col-9 mx-auto my-5 " role="alert">
                Your cart is empty!!
              </p>

              <button
                onClick={() => history.push("/shop")}
                className="btn checkout__button"
              >
                Continue shopping
              </button>
            </>
          )}
        </div>
        <div className="checkout__total__amount">Total : ${totalAmount} </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalAmount: selectTotalAmount,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onClearCart: () => dispatch(removeItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

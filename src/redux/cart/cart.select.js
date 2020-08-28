import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartToggle = createSelector(
  [selectCart],
  (cart) => cart.show
);

export const selectTotalCartItem = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0)
);

export const selectTotalAmount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0)
);

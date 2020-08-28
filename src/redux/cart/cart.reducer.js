import { cartActionTypes } from "./cart.types";
import { addToCart, removeFromCart } from "./cart.utils";

const initial_state = {
  show: false,
  cartItems: [],
  totalCartItem: 0,
};

const cartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return {
        ...state,
        show: !state.show,
      };

    case cartActionTypes.INCREASE_ITEM:
      return {
        ...state,
        cartItems: addToCart(state.cartItems, action.payload),
      };

    case cartActionTypes.DECREASE_ITEM:
      return {
        ...state,
        cartItems: removeFromCart(state.cartItems, action.payload),
      };

    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case cartActionTypes.REMOVE_ITEMS:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;

import { cartActionTypes } from "./cart.types";

export const toogleCart = () => {
  return {
    type: cartActionTypes.TOGGLE_CART,
  };
};

export const increaseItem = (item) => {
  return {
    type: cartActionTypes.INCREASE_ITEM,
    payload: item,
  };
};

export const decreaseItem = (item) => {
  return {
    type: cartActionTypes.DECREASE_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: cartActionTypes.REMOVE_ITEM,
    payload: item,
  };
};

export const removeItems = () => {
  return {
    type: cartActionTypes.REMOVE_ITEMS,
  };
};

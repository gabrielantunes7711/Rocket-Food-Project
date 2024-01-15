import cartActionTypes from "./action-types";

export const addCart = (payload) => ({
  type: cartActionTypes.ADD_PRODUCT,
  payload,
});

export const removeFromCart = (payload) => ({
  type: cartActionTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseProduct = (payload) => ({
  type: cartActionTypes.INCREMENT_PRODUCT,
  payload,
});

export const decreaseProduct = (payload) => ({
  type: cartActionTypes.DECREMENT_PRODUCT,
  payload,
});

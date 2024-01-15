import favoritesActionTypes from "./action-types";

export const addFavoritePlate = (payload) => ({
  type: favoritesActionTypes.ADD_FAVORITE,
  payload,
});

export const removeFavoritePlate = (payload) => ({
  type: favoritesActionTypes.REMOVE_FAVORITE,
  payload,
});

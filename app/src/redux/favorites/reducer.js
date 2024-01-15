import favoritesActionTypes from "./action-types";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case favoritesActionTypes.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case favoritesActionTypes.REMOVE_FAVORITE:
      const favoritesFiltered = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      );

      return {
        ...state,
        favorites: favoritesFiltered,
      };

    default:
      return state;
  }
};

export default favoriteReducer;

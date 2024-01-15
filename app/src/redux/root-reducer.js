import { combineReducers } from "redux";

import cartReducer from "./cart/reducer";
import favoriteReducer from "./favorites/reducer";

const rootReducer = combineReducers({ cartReducer, favoriteReducer });

export default rootReducer;

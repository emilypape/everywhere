import { combineReducers } from "redux";

import currentReducer from './features/currListing/currListingSlice';
import favoritesReducer from "./features/favorites/favoritesSlice";
import cartReducer from "./features/cart/cartSlice";

const rootReducer = combineReducers({
    current: currentReducer,
    cart: cartReducer,
    favorites: favoritesReducer
})

export default rootReducer
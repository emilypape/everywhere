import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    CLEAR_FAVORITES,
  } from "../../utils/actions";

const initialState = {
    favorites: []
  }

  export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
              ...state,
              favorites: [...state.favorites, action.favorites],
            };
      
          case REMOVE_FROM_FAVORITES:
            let newState = state.favorites.filter(favorites => {
              return favorites._id !== action._id;
            });
      
            return {
              ...state,
              favorites: newState
            };
      
          case CLEAR_FAVORITES:
            return {
              ...state,
              favorites: []
            };
        default:
            return state;
    }
  }
import {
    ADD_TO_CART,
    CLEAR_CART,
  } from "../../utils/actions";

const initialState = {
    cart: []
  }

  export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
              ...state,
              cart: [...state.cart, action.order],
            };
      
          case CLEAR_CART:
            return {
              ...state,
              cart: []
            };
        default:
            return state;
    }
  }
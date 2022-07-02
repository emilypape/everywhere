import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
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
              cart: [...state.cart, action.product],
            };
      
          case REMOVE_FROM_CART:
            let newState = state.cart.filter(product => {
              return product._id !== action._id;
            });
      
            return {
              ...state,
              cart: newState
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
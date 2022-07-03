import { UPDATE_CURRENT_LISTING } from "../../utils/actions";

const initialState = {
    currentListing: {}
}

export default function currentReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CURRENT_LISTING: 
         return {
            ...state,
            currentListing: action.currentListing
        }
        default: 
            return {
                state,
                message: 'No Current Listing Selected'
            };
    }
}
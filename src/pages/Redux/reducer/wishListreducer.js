import { ADD_WISHLIST } from "../constants/action-type";

const initialState = {
    wishList :[]
}
export const wishListreducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_WISHLIST:
            return {...state,
                wishList:[...state.wishList,(action.payload)]
            }
            
    
        default:
            return state
    }
}
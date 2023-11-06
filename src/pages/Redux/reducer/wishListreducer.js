import { ADD_WISHLIST, DELETE_DATA } from "../constants/action-type";

const initialState = {
    wishList :[]
}
export const wishListreducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_WISHLIST:
            return {...state,
                wishList:[...state.wishList,(action.payload)]
            }
            case DELETE_DATA:
                return {...state,
                wishList:state.wishList.filter((item)=>item.id !== action.payload)}
            
    
        default:
            return state
    }
}
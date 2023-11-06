import { ADD_CART, DELETE_DATA } from "../constants/action-type";

const initialState = {
    cart:[]
}
export const cartReducer = (state =initialState ,action)=>{
    switch (action.type) {
        case ADD_CART:
            return {...state,
                cart:state.cart.concat(action.payload)
            } 
            case DELETE_DATA:
                return {...state,
                cart:state.cart.filter((item)=>item.id !== action.payload)}
    
        default:
            return state
    }
}
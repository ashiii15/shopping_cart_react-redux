import { combineReducers } from "redux";
import { productReducer } from "./productREducer";
import { cartReducer } from "./cartReducer";
import { wishListreducer } from "./wishListreducer";

export const reducers = combineReducers({
    allProducts :productReducer,
    addToCart:cartReducer,
    addToWishlist:wishListreducer
})
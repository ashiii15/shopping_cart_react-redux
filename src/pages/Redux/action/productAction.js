import { ADD_CART, ADD_WISHLIST, DELETE_DATA, SET_DATA, } from "../constants/action-type"

export const setData = (products)=>{
    return {
        type:SET_DATA,
        payload:products
    }
}
export const addCart =(product)=>{
    return {
        type:ADD_CART,
        payload:product
    }
}
export const addWishList =(product)=>{
    return {
        type:ADD_WISHLIST,
        payload:product
    }
}
export const deleteData =(id)=>{
    return{
        type:DELETE_DATA,
        payload:id
    }
}


import {   SET_DATA } from "../constants/action-type";

const initialState ={
    products :[]
}
export const productReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SET_DATA:
            return {...state,products:action.payload}
            
        default:
            return state
    }
}
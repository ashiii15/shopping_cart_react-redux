import {   REMOVE_DATA, SELECT_DATA, SET_DATA } from "../constants/action-type";

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
export const selectDataReducer =(state={},action)=>{
    switch (action.type) {
        case SELECT_DATA:
            return {...state,products:action.payload} 
            case REMOVE_DATA:
                return {}   
        default:
            return state
    }
}

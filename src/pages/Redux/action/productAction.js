import { SET_DATA } from "../constants/action-type"

export const setData = (products)=>{
    return {
        type:SET_DATA,
        payload:products
    }
}
export const  selectData = (products)=>{

}
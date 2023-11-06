// import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const dispatch =useDispatch()
    const {productId} =useParams()
    console.log(productId);
    // const fetchSingleProduct =async()=>{
    //     const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>console.log(err))
    //     dispatch(response);
    // }

  return (
   
    <div>hello</div>
  )
}

export default ProductDetails
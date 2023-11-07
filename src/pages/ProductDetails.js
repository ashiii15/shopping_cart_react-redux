// import axios from 'axios'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectData } from './Redux/action/productAction';

function ProductDetails() {
    const product = useSelector((state)=>state.selectedProduct.products)
    console.log(product);
    const {productId} =useParams()
    const dispatch = useDispatch()
    const fetchSingleProduct =async()=>{
        const {data} = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>console.log(err))
        dispatch(selectData(data));
        // console.log(data);

    }
    useEffect(()=>{
      if(productId)
        fetchSingleProduct()
    },[productId])
    return (product ?
        (<div className='container'>
        <div className='row mt-4'>
            <img  style={{width:"400px",height:"500px"}}src={product.image} alt={product.title}/>
        <div className='col-sm'>

        </div>
        <div className='col-sm'>
        <h3>{product.title}</h3>
            <h5 style={{fontSize:"30px"}}>Price: ${product.price} <del>$170</del></h5>
            <p style={{fontSize:"20px"}}>{product.description}</p>
            <input type="number" value="1" min="1"/>
                <button className='btn btn-primary"'>Add to Cart</button>
            
        </div>
        
        </div>
    </div>)
         :(<div>Loading...</div>)
       )

 
}

export default ProductDetails
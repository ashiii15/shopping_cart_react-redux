import React from 'react'
import {  Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { deleteData } from "./Redux/action/productAction";



function CartList() {
  const cartListItems = useSelector((state)=>state.addToCart.cart)
  const dispatch = useDispatch()
  console.log(cartListItems);
  return (
    
    <div className='d-flex'>
      {cartListItems.length > 0 ? cartListItems.map((items)=>{
        const {image,title,description,id} =items
        return (
          <Row className='mt-3 ms-2'>
             <Col  sm={12} md={6} lg={6}>
                {/* <Link to={`product/${id}`} > */}
                <div className="card" style={{width: "18rem"}}>
                  <img height={"300px"} width={"250px"} className="card-img-top" src={image} alt={title}/>
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description?.slice(0,100)}</p>
                    <button onClick={()=>dispatch(deleteData(id))} className="btn btn-primary">delete</button>
                    <button className="btn btn-primary">wishList</button>

                  </div>
                </div>
                {/* </Link> */}
              </Col>
          </Row>
        )
      }):<p>nothing display</p>}
     
    </div>
  )
}

export default CartList
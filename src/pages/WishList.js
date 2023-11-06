import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { deleteData } from './Redux/action/productAction';

function WishList() {
  const wishListItems = useSelector((state)=>state.addToWishlist.wishList)
  const dispatch =useDispatch()
  console.log(wishListItems);
  return (
    <>
    <div className='d-flex'>
      {wishListItems.length >0 ? wishListItems.map((wishList)=>{
        const {id,image,title,description} = wishList
        return (
          <Row className='mt-3 ms-2' key={id}>
          <Col  sm={12} md={6} lg={6}>
             {/* <Link to={`product/${id}`} > */}
             <div className="card" style={{width: "18rem"}}>
               <img height={"300px"} width={"250px"} className="card-img-top" src={image} alt={title}/>
               <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                 <p className="card-text">{description?.slice(0,100)}</p>
                 <button onClick={()=>dispatch(deleteData(id))}  className="btn btn-primary">delete</button>

               </div>
             </div>
             {/* </Link> */}
           </Col>
       </Row>

        )
      }):<h4>Empty whishlist</h4>}
    </div>


    </>
  )
}

export default WishList
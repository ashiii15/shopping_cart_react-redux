import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
    // const products= useSelector((state)=>state.allProducts.products)
    const cartItems = useSelector((state)=>state.addToCart.cart)
    const whishListItems = useSelector((state)=>state.addToWishlist.wishList)
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link to={'/'} className="navbar-brand">Ecart</Link>
                <Link className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <div className="d-flex " style={{marginLeft:'60rem'}}>
                        <Link to={'/cartlist'} className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartItems?.length}</span>
                        </Link>
                        <Link to={'/wishlist'} className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Wishlist
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{whishListItems?.length}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
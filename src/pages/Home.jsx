import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const fetchproducts = async()=>{
    // to make api call
    const response = await axios.get("https://fakestoreapi.com/products")
    .catch((err)=>err)
    console.log(response.data);
  }
  useEffect(()=>{
    fetchproducts()
  })

  return (
    <>
    <div className="card mt-4 ms-4" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link  className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
    </>
  )
}

export default Home
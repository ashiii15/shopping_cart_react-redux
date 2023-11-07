import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, addWishList, setData } from "./Redux/action/productAction";
import { Col, Row,Card } from "react-bootstrap";
import ProductDetails from "./ProductDetails";

function Home() {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  const dispatch = useDispatch();

  const fetchproducts = async () => {
    // to make api call
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => err);
    dispatch(setData(response.data));
  };
  useEffect(() => {
    fetchproducts();
  }, []);

  return (
    <div className="d-flex flex-row mb-3 mt-4 ms-3 col-md-4">
       {products &&
        products?.map((product) => {
          const { id, description, image, title,price } = product;
          return (
            <Row key={id} className="d-flex flex-row mb-3 mt-4 ms-3 ">
              <Col sm={3}>
                <Link to={`product/${id}`} style={{textDecoration:"none"}} >
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    width={"250px"}
                    height={"300px"}
                    src={image}
                    className="card-img-top"
                    alt="..."
                  />
                  <Card className="card-body">
                    <Card.Text className="card-title ">{title.slice(0,30)}</Card.Text>
                    <p className="card-text">
                      {description.slice(0,180)}
                    </p>
                    <h5>${price}</h5>
                    <div >
                    <button onClick={()=>dispatch(addCart(product))} style={{marginRight:"20px"}} className="btn btn-primary">cart</button>
                    <button onClick={()=>dispatch(addWishList(product))} className="btn btn-primary">wishlist</button>
                    </div>

                  </Card>
                </Card>
                </Link>
              </Col>
            </Row>
          );
        })}
        <ProductDetails/>
    </div>
  );
}

export default Home;

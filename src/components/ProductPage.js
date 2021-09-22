import React from "react";
import { Card, Button} from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createProduct, addToCart } from "../Actions";



function ProductPage(props) {
    const data = props.location.aboutProps;
    console.log('prod',data)
  return (
    <div>
      <Card style={{ width: '100vw', height: "93vh", display: "grid" }}>
                <Card.Img variant="top" src={data.item.image} style={{ height: "650px", width: "700px", margin: "auto" }} />
                <Card.Body>
                    <Card.Title><h3>{data.item.name}</h3></Card.Title>
                    <Card.Text>{data.item.description}</Card.Text>
                    <Card.Text><h4>{`₹${data.item.price}`}</h4></Card.Text>
                    <Link variant="primary"  to="/" style={{ color: "Black", textDecoration: "none"}}><Button>Buy Now</Button></Link>
                    &nbsp; &nbsp;
                    <Link variant="primary" to={`/`} ><Button onClick={()=>props.addToCart(data.item)}>Add To Cart</Button></Link>&nbsp; &nbsp;
                    <Link variant="primary" to={`/`}><Button onClick={()=>props.createProduct(data.item.id, "DELETE")}>Delete Item</Button></Link>
                    <Card.Text>Product added on : {data.item.time}</Card.Text>
                </Card.Body>
            </Card>
    </div>
  );
}

export default connect(null, {addToCart,createProduct})(ProductPage);

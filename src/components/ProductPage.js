import React from "react";
import { Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";


function ProductPage(props) {
    const data = props.location.aboutProps;
    console.log('prod',data)
  return (
    <div>
      <Card style={{ width: '100vw', height: "93vh", display: "grid" }}>
                <Card.Img variant="top" src={data.item.image[0].url} style={{ height: "250px", width: "200px", margin: "auto" }} />
                <Card.Body>
                    <Card.Title>{data.item.name}</Card.Title>
                    <Card.Text>{data.item.description}</Card.Text>
                    <Card.Text>{`₹${data.item.price}`}</Card.Text>
                    <Link variant="primary"  to="/" style={{ color: "Black", textDecoration: "none"}}><Button>Buy Now</Button></Link>
                    &nbsp; &nbsp;
                    <Link variant="primary" to={`/`} style={{ color: "Black", textDecoration: "none"}} ><Button>Add To Cart</Button></Link>&nbsp; &nbsp;
                    <Link variant="primary" to={`/`} style={{ color: "Black", textDecoration: "none"}} ><Button>Delete Item</Button></Link>
                </Card.Body>
            </Card>
    </div>
  );
}

export default ProductPage;

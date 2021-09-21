import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, createProduct } from "../Actions";
import Cart from "./Cart";
import App from "../App";
import '../App.css';

const ItemList = (props) => {
  const data = props.data;

  console.log("fetch", data);

  const [deleteData, setDeleteData] = useState(data);
  const [cartItem, setCartItem] = useState([]);

  console.log('cart', cartItem)

  const handleDelete = (index) => {
    console.log('index', index)
    props.createProduct(index, "DELETE");
  
  }

  //    console.log(data.image[0].url);
  const ShowItems = () => {
    if (data[0] === undefined ) {
      return data.shift();
    }
    return data.map((item, index) => {
      return (
        <div>
          <Card className="mt-3 m-3" style={{ width: "18rem" }} >
          <Link to={{pathname:'/productPage', aboutProps:{ item }}}  >

            <Card.Img className='card-image-top' variant="top" src={item.image}/>
            </Link>
            <Card.Body>
              <Card.Title>{item.name} </Card.Title>
              <Card.Text>{item.description} </Card.Text>
              <Card.Text>
                <h4> Price : ₹{item.price}</h4>
              </Card.Text>
              <Button variant="primary" onClick={()=>addToCart(item)} >Add to cart</Button>
              <Button className="m-2" variant="primary" onClick={addToCart(item)}  >Update</Button>
              <Button className="m-2" variant="primary" onClick={() => handleDelete(item.id)} > Delete Item </Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  return (
    <div>
      {!props.data[0] ? <div>no items</div> :<div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6,1fr)",
          gridGap: "10px",
        }}> <ShowItems /> </div>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.createProduct,
  };
};

const mapDispatchtoProps = {createProduct,};

export default connect(mapStateToProps, mapDispatchtoProps)(ItemList);

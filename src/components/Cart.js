import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromCart } from "../Actions";

const Cart = (props) => {
  const data = props.cartData;
  const total = data.map(item => item.quantity*item.price)
  const totalCartAmount = total.reduce((sum,current)=>sum+current,0)
  
  console.log(totalCartAmount)

  const ShowItems = () => {
    return data.map((item) => {
      return (
        <>
          <div>
            <Card className="mt-3 m-3" style={{ width: "18rem" }}>
              <Card.Img
                className="card-image-top"
                variant="top"
                src={item.image}
              />
              <Card.Body>
                <Card.Title>{item.name} </Card.Title>
                <Card.Text>{item.description} </Card.Text>
                <Card.Text>
                  <h4> Price : ₹{item.price}</h4>
                </Card.Text>
                <Card.Text> Qty : {item.quantity} </Card.Text>
                <Button
                  className="m-2"
                  variant="primary"
                  onClick={() => props.removeFromCart(item.id)}
                >
                  {" "}
                  Remove Item{" "}
                </Button>
              </Card.Body>
            </Card>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div>
        {data === null ? (
          <div>NO ITEMS AVAILABLE</div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6,1fr)",
              gridGap: "10px",
            }}
          >
            <ShowItems />
          </div>
        )}
      </div>
      <div>
        <hr /><h4 align='right'> CART TOTAL : ₹{totalCartAmount}.00</h4>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cartData: state.addcart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Cart);

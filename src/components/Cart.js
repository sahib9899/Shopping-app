import React from 'react'
import { Card, Button } from "react-bootstrap";

const Cart = () => {



    return (
        <div>
           <div>
          <Card className="mt-3 m-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title> </Card.Title>
              <Card.Text> </Card.Text>
              <Card.Text>
                <h4> Price : ₹</h4>
              </Card.Text>
              
              <Button className="m-2" variant="primary"  >
                Delete Item
              </Button>
            </Card.Body>
          </Card>

          
        </div>
        </div>
    )
}

export default Cart;

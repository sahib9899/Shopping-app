import react, {useState} from "react";
import { Card, Button, Modal, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, createProduct } from "../Actions";
import ImageUploading from "react-images-uploading";

import Cart from "./Cart";
import '../App.css';

const ItemList = (props) => {
  const data = props.data;
  //  console.log("fetch", data);
  const [update, setUpdate] = useState({});
  const [show, setShow] = useState(false)

  const handleDelete = index => props.createProduct(index, "DELETE")
  const handleUpdate = (item) => {
    setUpdate(item)
    setShow(true)
  }

  const onChange = (image) => {
    // setImage(image);
    console.log(image[0].url);
    setUpdate({ ...update, image: image[0].url });
  };

  const ShowItems = () => {
    if (data[0] === undefined )  return data.shift();
    
    return data.map((item) => {
      return (
        <div>
          <Card className="mt-3 m-3" style={{ width: "18rem" }} >
          <Link to={{pathname:'/productPage', aboutProps:{ item }}}  >
            
            <Card.Img className='card-image-top' variant="top" src={item.image}/>
            </Link>
            <Card.Body>
              <Card.Title> {item.name} </Card.Title>
              <Card.Text> {item.description} </Card.Text>
              <Card.Text>
                <h4> Price : ₹{item.price}</h4>
              </Card.Text>
              <Button variant="primary" onClick={()=>props.addToCart(item)} > Add to cart</Button>
              <Button className="m-2" variant="primary" onClick={()=>handleUpdate(item)} > Update </Button>
              <Button className="m-2" variant="primary" onClick={() => handleDelete(item.id)} > Delete Item </Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  return (
    <>
    <div>
      {!props.data[0] ? <div>No items available</div> :<div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6,1fr)",
          gridGap: "10px",
        }}> <ShowItems /> </div>}
    </div>
     {
      <Modal show={show}>
          <Modal.Body>
              <Modal.Header>Item Name</Modal.Header>
              <FormControl type='text' value={update.name} onChange={(e)=>{setUpdate({...update, name:e.target.value})}} />
              <Modal.Header>Description</Modal.Header>
              <FormControl type='text' value={update.description} onChange={(e)=>{setUpdate({...update, description:e.target.value})}} />
              <Modal.Header>Description</Modal.Header>
              <ImageUploading single onChange={onChange} dataURLKey="url">
              {({ onImageUpload }) => (
                <Button variant='outline-primary' onClick={onImageUpload}>Choose Image</Button>
              )}
            </ImageUploading>
              <Modal.Header>Price</Modal.Header>
              <FormControl type='text' value={update.price} onChange={(e)=>{setUpdate({...update, price:e.target.value})}}/>
          </Modal.Body>
          <Modal.Footer>
              <Button onClick={()=>{props.createProduct(update, "UPDATE");setShow(false)}}>Save changes</Button>
              <Button onClick={()=>{setShow(false);setUpdate({})}}>Close</Button>

          </Modal.Footer>
      </Modal>
    }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.product,
  };
};

const mapDispatchtoProps = {
  createProduct,
  addToCart,
  
}

export default connect(mapStateToProps, mapDispatchtoProps)(ItemList);

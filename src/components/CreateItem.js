import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createProduct } from "../Actions";
import ImageUploading from "react-images-uploading";
import { v4 as uuidv4 } from 'uuid';

function CreateItem(props) {
  const [itemData, setItemData] = useState({
    id: '',
    name: "",
    description: "",
    image: "",
    price: 0,
  });
  const [image, setImage] = useState();

  const handleInput = () => {
    //   e.preventDefault();
    console.log('handleInput',itemData)
    props.createProduct( {...itemData, id: uuidv4()}, "CREATE" );
  };

  const onChange = (image) => {
    // setImage(image);
    console.log(image[0].url);
    setItemData({ ...itemData, image: image[0].url });
  };
  
  return (
    <div>
      <Container>
        <form>
          <Row className="mt-5 justify-content-md-left" xs mt="3" lg="3">
            <label> Item Name </label>
            <input
              type="text"
              value={itemData.name}
              onChange={(e) =>
                setItemData({ ...itemData, name: e.target.value })
              }
            />
          </Row>

          <Row className="mt-2 justify-content-md-left" xs lg="3">
            <label> Item Description </label>
            <textarea
              value={itemData.description}
              type="text"
              onChange={(e) =>
                setItemData({ ...itemData, description: e.target.value })
              }
            />
          </Row>

          <Row className="mt-2 justify-content-md-left" xs lg="3">
            <label> Item Image </label>
            {/* <input type="file" value={itemData.image} onChange={handleChange} /> */}

            <ImageUploading
              single
              value={image}
              onChange={onChange}
              dataURLKey="url"
            >
              {({ onImageUpload }) => (
                <Button onClick={onImageUpload}>Choose Image</Button>
              )}
            </ImageUploading>
          </Row>

          <Row className="mt-2 justify-content-md-left" xs lg="3">
            <label> Item Price </label>
            <input
              type="number"
              value={itemData.price}
              min="0"
              onChange={(e) =>
                setItemData({ ...itemData, price: e.target.value })
              }
            />
          </Row>

          <Link to="/productList">
            {" "}
            <Row className="mt-4 justify-content-md-center" mt-3 xs lg="5">
              <Button onClick={handleInput}>Add New Item </Button>
            </Row>
          </Link>
        </form>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.createProduct,
  };
};

const mapDispatchtoProps = {
  createProduct,
};

export default connect(mapStateToProps, mapDispatchtoProps)(CreateItem);

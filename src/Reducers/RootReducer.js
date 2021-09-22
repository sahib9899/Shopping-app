import { combineReducers } from "redux";
import {createProduct} from "./CreateProduct";
import { addCart } from "./CartReducer";

const rootReducer = combineReducers({
    product:createProduct, 
    addcart:addCart
})

export default rootReducer;
import { combineReducers } from "redux";
import {createProduct, addToCart} from "./CreateProduct";

const rootReducer = combineReducers({
    createProduct, 
    addToCart
})

export default rootReducer;
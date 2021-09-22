export const createProduct = (data, type) => {
  console.log("action",data)
  return {
    type,
    payload: data
  }
}

export const addToCart = (data) => {
  console.log("action111",data)
  return {
    type: "ADD_ITEM",
    payload: data
  }
}

export const removeFromCart = (data) => {
  console.log("remove",data)
  return {
    type: "REMOVE_ITEM",
    payload: data
  }
}

export const decrementQty = (data) => {
  console.log("remove",data)
  return {
    type: "DECREMENT_QTY",
    payload: data
  }
}




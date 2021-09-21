export const createProduct = (data, type) => {
  console.log("action",data)
  return {
    type,
    payload: data
  }
}

export const addToCart = (data) => {
  console.log("action",data)
  return {
    type: "ADD",
    payload: data
  }
}

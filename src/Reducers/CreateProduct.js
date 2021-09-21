export const createProduct = (state=[], action) => {
  switch (action.type) {
    case "CREATE":
      console.log("payload", action.payload);
      return  [...state,action.payload];

      case "DELETE":
      console.log("payload", action.payload);
      console.log('state',state)
      const newData =  state.filter((item) => item.id !== action.payload);
      console.log(newData)
      return newData;

    default:
      return state;
  }
};

export const addToCart = (state=[], action) => {
 
  switch (action.type) {
    case "ADD":
      console.log("add", action.payload);
      return  [...state,action.payload];

    default:
      return state;
  }
};


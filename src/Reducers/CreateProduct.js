export const createProduct = (state=[], action) => {
  switch (action.type) {
    case "CREATE":
      console.log("payload", action.payload);
      return  [...state,action.payload];

      case "UPDATE":
        const index = state.findIndex(item =>item.id === action.payload.id)
        const newData = [...state]
        newData[index] = action.payload;
        return newData;

      case "DELETE":
      console.log("payload", action.payload);
      console.log('state',state)
      const updateData =  state.filter(item => item.id !== action.payload);
      console.log(updateData)
      return updateData;

      case "INCREMENT":
        const incIndex = state.findIndex(item =>item.id === action.payload)
        const incData = [...state]
        console.log(incData[incIndex]);
        incData[incIndex].quantity += 1;
        return incData;


    default:
      return state;
  }
};



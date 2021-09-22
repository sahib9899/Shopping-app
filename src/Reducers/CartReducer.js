export const addCart = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const found = state.find((item) => item.id === action.payload.id);
      if (found) {
        const newData = state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
        return newData;
      } else {
        return [...state, action.payload];
      }

    case "REMOVE_ITEM":
      console.log("remove", action.payload);
      const newData = state.filter((item) => item.id !== action.payload);
      console.log(newData);
      return newData;

    default:
      return state;
  }
};

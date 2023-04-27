const initialState = {
  currentProduct: "",
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_CURRENT_PRODUCT":
      const newState = { ...state, currentProduct: action.payload };
      //console.log(newState);
      return newState;
    default:
      return state;
  }
}

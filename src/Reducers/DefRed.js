const initialState = 0;

const changeNum = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return state + action.payLoad;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};

export default changeNum;
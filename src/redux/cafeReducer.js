const initialState = {
  cafes: [],
  cafe: {}
}

const cafeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SELECT_CAFE':
      return payload;

    case "FETCH_CAFES":
      return {
          ...state,
          cafes: payload
      };

    default:
      return state;
  }
};


 export default cafeReducer; 
const initialState = {
  cafes: []
}

const cafeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_USER':
      return payload;

    case 'CLEAR_USER':
      return {};

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
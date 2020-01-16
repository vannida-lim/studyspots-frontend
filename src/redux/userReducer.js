const initialState = {
    users: []
}
const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'SET_USER':
        return payload;
      case 'CLEAR_USER':
        return {};
      default:
        return state;
    }
};


export default userReducer;
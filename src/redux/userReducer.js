const initialState = {
    users: [],
    user: {}
}
const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'SET_USER':
        return payload;
      case 'CLEAR_USER':
        return {};
      case 'ADD_TO_FAVORITES':
        return {...state.user, payload};
      default:
        return state;
    }
};


export default userReducer;
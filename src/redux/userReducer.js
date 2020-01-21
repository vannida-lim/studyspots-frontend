const initialState = {
    currentUser: {}
}
const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'LOGIN_USER':
        return {...state, currentUser: payload};
      case 'LOGOUT_USER':
        return {};
      default:
        return state;
    }
};


export default userReducer;
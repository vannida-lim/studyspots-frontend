// const initialState = {
//     favorites: {}
// }

const favoritesReducer = (state = {}, { type, payload }) => {
    switch(type) {
        case 'ADD_TO_FAVORITES':
            return {...state.favorites, payload}
        // case 'GET_FAVORITES':
        //     return { favorites }
        case 'UPDATE_FAVORITE':
            return {...state.favorites, payload}
        case 'DELETE_FAVORITE':
            return {...state.favorites, }
        default:
            return state;
    }

}

export default favoritesReducer;
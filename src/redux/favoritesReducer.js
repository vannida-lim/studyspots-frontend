const initialState = {
    favorites: []
}

const favoritesReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case 'ADD_FAVORITE':
            return {...state, 
                favorites: [...state.favorites, payload]
            }
        case 'UPDATE_FAVORITE':
            return {...state.favorites, payload}
        case 'DELETE_FAVORITE':
            let filteredArray = state.favorites.filter(favorite => favorite !== payload)
            return {...state, favorites: filteredArray}
        case 'SHOW_FAVORITES':
            return {...state, favorites: payload}
        default:
            return state;
    }
}

export default favoritesReducer;
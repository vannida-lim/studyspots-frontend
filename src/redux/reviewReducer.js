const intialState = {
    reviews: []
}

const reviewReducer = (state = intialState, { type, payload }) => {
    switch(type){
        case 'ADD_REVIEW':
            return {...state.reviews, payload}
        default:
            return state; 
    }
}

export default reviewReducer; 
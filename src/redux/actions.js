const BASE_URL = 'http://localhost:3000';
const USERS_URL = BASE_URL + '/users';
const PERSIST_URL = BASE_URL + '/persist';
const LOGIN_URL = BASE_URL + '/login';
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;

const setUserAction = user => ({
    type: 'SET_USER',
    payload: user
  });

const clearUserAction = () => ({
    type: 'CLEAR_USER'
});
  
const newUserToDB = userObj => dispatch => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
    };
    fetch(USERS_URL, config)
      .then(r => r.json())
      .then(data => {
        dispatch(setUserAction(data.user));
        localStorage.setItem('token', data.token);
      });
};
  
const deleteUserFromDB = userId => dispatch => {
    const config = {
      method: 'DELETE'
    };
    fetch(SPECIFIC_USER_URL(userId), config).then(r => {
      dispatch(clearUserAction());
      localStorage.clear();
    });
};
  
const loginUserToDB = userCredentials => dispatch => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    };
    fetch(LOGIN_URL, config)
      .then(r => r.json())
      .then(data => {
        dispatch(setUserAction(data.user));
        localStorage.setItem('token', data.token);
      });
};
  
const persistUser = () => dispatch => {
    const config = {
      method: 'GET',
      headers: {
        Authorization: `bearer ` + localStorage.token
      }
    };
    fetch(PERSIST_URL, config)
      .then(r => r.json())
      .then(userInstance => {
        dispatch(setUserAction(userInstance));
      });
};
  
const logoutUser = () => dispatch => {
    dispatch(clearUserAction());
    localStorage.clear();
};

const addToFavorites = cafe => ({
    type: "ADD_TO_FAVORITES",
    payload: cafe
})

const setCafes = cafes => ({
    type: "SET_CAFES",
    payload: cafes
});

const fetchCafes = () => dispatch => {
    fetch("http://localhost:3000/locations")
    .then(r => r.json())
    .then(cafes => {
       dispatch( {type: "FETCH_CAFES", payload: cafes} )
    })
};


const selectCafe = cafe => ({
    type: 'SELECT_CAFE',
    payload: cafe
});

const addReview = review => ({
    type: 'ADD_REVIEW',
    payload: review
})

export default {
    newUserToDB,
    deleteUserFromDB,
    loginUserToDB,
    persistUser,
    logoutUser,
    fetchCafes,
    setCafes,
    selectCafe,
    addToFavorites,
    addReview
}
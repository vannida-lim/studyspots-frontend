const BASE_URL = 'http://localhost:3000';
const USERS_URL = BASE_URL + '/users';
const PERSIST_URL = BASE_URL + '/persist';
const LOGIN_URL = BASE_URL + '/auth';
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;

const setUserAction = user => ({
    type: 'LOGIN_USER',
    payload: user
  });

const clearUserAction = () => ({
    type: 'LOGOUT_USER'
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
        // debugger
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
        // debugger
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
        dispatch({type: 'SHOW_FAVORITES', payload: userInstance.favorites});
      });
};
  
const logoutUser = () => dispatch => {
    dispatch(clearUserAction());
    localStorage.clear();
};

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


const addFavorite = (currentUser, cafe) => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: currentUser.id,
      location_id: cafe.id
    })
  }
  fetch(("http://localhost:3000/users/" + currentUser.id + "/favorites"), config)
  .then( r => r.json())
  .then(data => {
      dispatch( {type: "ADD_FAVORITE", payload: data} )
  })
}

// const deleteFavorite = cafe => ({
//   type: 'DELETE_FAVORITE',
//   payload: cafe
// })

const deleteFromDB = (currentUser, cafe) => dispatch => {
  const config = {
    method: 'DELETE',
  }
  fetch(("http://localhost:3000/users/" + currentUser.id), config)
  .then(r => dispatch( {type: "DELETE_FAVORITE", payload: cafe} ))
}

export default {
    newUserToDB,
    deleteUserFromDB,
    loginUserToDB,
    persistUser,
    logoutUser,
    fetchCafes,
    setCafes,
    selectCafe,
    addFavorite,
    // deleteFavorite,
    deleteFromDB
}
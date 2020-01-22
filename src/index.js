import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import logger from "redux-logger"
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import cafeReducer from './redux/cafeReducer';
import userReducer from './redux/userReducer';
import favoritesReducer from './redux/favoritesReducer';
import reviewReducer from './redux/reviewReducer';

const rootReducer = combineReducers({
    allInfoAboutCafes: cafeReducer,
    users: userReducer,
    favorites: favoritesReducer,
    reviews: reviewReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(/*logger,*/thunk)))

ReactDOM.render(
<Provider store={store}>
     <Router>
        <App />
    </Router>
</Provider>, 
document.getElementById('root'));



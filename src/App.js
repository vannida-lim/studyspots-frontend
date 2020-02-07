import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './redux/actions'
import { Route, Switch } from 'react-router'
import styled from 'styled-components';

import Nav from './components/Nav';
import CafeList from './components/CafeList';

import Auth from './pages/Auth'
import Home from './pages/Home'
import Profile from './pages/Profile'


const Footer = styled.div`
  font-family: 'Quicksand', sans-serif; 
  font-size: 1em;  
  color: white; 
  text-align: center;
  position: fixed;
  overflow: hidden;
  bottom: 0;
  padding: 10px;
  width: 100%
`

const mapDispatchToProps = {fetchCafes:   actions.fetchCafes,
  currentUser: actions.persistUser
}
class App extends Component {
 
  componentDidMount() {
    if (localStorage.token) {
      return( this.props.fetchCafes(),
      this.props.currentUser()) 
    }
  }

    render() {
    return (
    <div> 
      <Nav />
      <Switch>
          <Route path='/login' render={() => <Auth/>}/>
          <Route path='/signup' render={() => <Auth/>}/>
          <Route path='/home' render={() => <Home/>}/>
          <Route path='/locations' render={() => <CafeList/>}/>
          <Route path='/profile' render={() => <Profile />}/>
      </Switch>
      <Footer>Made with <span role="img" aria-label="sparkling heart">💖</span> by <a href="https://github.com/vannida-lim">Vannida Lim</a></Footer>
    </div>
  );
  }

 
}

export default connect(null, mapDispatchToProps)(App);

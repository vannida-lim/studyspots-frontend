import React, { Component } from 'react';
import styled from 'styled-components';
// import { Grid, Cell } from 'styled-css-grid';
import Nav from './components/Nav';
// import Routes from './Routes';
// import CafeList from './components/CafeList'
// import Cafe from './components/Cafe'
// import MapContainer from './containers/MapContainer'
import { connect, useDispatch } from 'react-redux'
import actions from './redux/actions'
import { Route, Switch } from 'react-router'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Profile from './pages/Profile'
// import MapContainer from '../containers/MapContainer'

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

const mapDispatchToProps = {fetchCafes: actions.fetchCafes,
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
          <Route path='/profile' render={() => <Profile />}/>
      </Switch>
      <Footer>Made with <span role="img" aria-label="sparkling heart">💖</span> by <a href="https://github.com/vannida-lim">Vannida Lim</a></Footer>
      {/* <MapContainer/> */}
     {/* old code  */}
      {/* <Routes /> */}
      {/* <MainContainer /> */}
      {/* <Grid columns={1} >
        {/* <CafeList/>
        <Cafe/> */}
        {/* <Cell width={12}><MapContainer/></Cell>
        <Cell width={12}><Footer>Made with <span role="img" aria-label="sparkling heart">💖</span> by <a href="https://github.com/vannida-lim">Vannida Lim</a></Footer></Cell> */}
      {/* </Grid> */} 
    </div>
  );
  }

 
}

export default connect(null, mapDispatchToProps)(App);

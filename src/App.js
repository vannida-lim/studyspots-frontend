import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import Nav from './components/Nav';
import Routes from './Routes';
import CafeList from './components/CafeList'
import Cafe from './components/Cafe'
import MapContainer from './containers/MapContainer'
import { connect } from 'react-redux'
import actions from './redux/actions'

const Footer = styled.section`font-family: 'Quicksand', sans-serif; font-size: 1em;  color: white; text-align: center; ;`

const mapDispatchToProps = {fetchCafes: actions.fetchCafes }
class App extends Component {

  componentDidMount() {
    return this.props.fetchCafes()
  }

  render() {
    return (
    <div>
      <Nav />
      <Routes />
      {/* <MainContainer /> */}
      <Grid columns={3} >
        <CafeList/>
        <Cafe/>
        <MapContainer/>
      </Grid>
      <Footer>Made with <span role="img" aria-label="sparkling heart">💖</span> by <a href="https://github.com/vannida-lim">Vannida Lim</a>
      </Footer>
    </div>
  );
  }

 
}

export default connect(null, mapDispatchToProps)(App);

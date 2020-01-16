import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from './components/Nav';
import Routes from './Routes';
import MainContainer from './containers/MainContainer'
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
      <MainContainer />
      <Footer>Made with <span role="img" aria-label="sparkling heart">💖</span> by <a href="https://github.com/vannida-lim">Vannida Lim</a>
      </Footer>
    </div>
  );
  }

 
}

export default connect(null, mapDispatchToProps)(App);

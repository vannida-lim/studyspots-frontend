import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import MapContainer from '../containers/MapContainer';
import styled from 'styled-components';

const MapWrapper = styled.div`
  padding: 15px
`
const Header = styled.section`
  text-align: center;
  color: white;
  font-size: 15px

`

const Home = (props) => {
  const username = useSelector(state => state.users.currentUser.username)
  const isLoggedIn = !!localStorage.token

  const text = isLoggedIn ? (
    <div>
      <Header><h1><span role='img' aria-label='sparkle-emoji'>✨</span>{username}<span role='img' aria-label='sparkle-emoji'>✨</span> is currently logged in</h1></Header>
    <MapWrapper><MapContainer/></MapWrapper>
    </div>
  ) : (
    <h1>Please login or signup!</h1>
  );
  return <div>{text}</div>;
  
};

const mapStateToProps = (state) => {
  return {
    user: state.users.user
  }
}

export default connect(mapStateToProps)(Home);
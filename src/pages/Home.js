import React from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux'

const Home = (props) => {
  // console.log(this.props)
  const username = useSelector(state => state.username);
  const text = username ? (
    <h1>{username} is currently logged in</h1>
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
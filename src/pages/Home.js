import React, {useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { connect } from 'react-redux'
import MapContainer from '../containers/MapContainer'
import userActions from "../redux/actions"

const Home = (props) => {
  // console.log(this.props)
  // const username = useSelector(props => props.user);
  const dispatch = useDispatch();
  const username = useSelector(state => state.users.currentUser.username)
  

  const isLoggedIn = !!localStorage.token
  const text = isLoggedIn ? (
    <div>
      <h1>{username} is currently logged in</h1>
    <MapContainer/>
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
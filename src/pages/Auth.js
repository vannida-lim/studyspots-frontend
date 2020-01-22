import React, { useState } from 'react';
import {useDispatch} from "react-redux"
import { useHistory } from 'react-router-dom'
import userActions from "../redux/actions"

const Auth = (props) => {
  const dispatch = useDispatch()
  const [login, setLogin] = useState(true);
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });
  console.log(login)

  let history = useHistory()
  
  const handleChange = e => {
    setUserData({...userData,[e.target.name]: e.target.value});
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    if(login){
      dispatch(userActions.loginUserToDB(userData)) 
    }else{
      dispatch(userActions.newUserToDB(userData))
    }
    
    
    // setUserData({
    //   username: '',
    //   password: ''
    // })
    history.push("/home")
  };
  
  const { username, password } = userData;
 console.log(username,password)
  return (
    <div >
      <h1>{login ? 'Log in' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <input type="submit" value={login ? 'Log in' : 'Sign Up'} />
      </form>
      <div >
        <button onClick={() => setLogin(true)}>Login</button>
        <button onClick={() => setLogin(false)}>Sign Up</button>
      </div>
    </div>
  );
};

export default Auth;
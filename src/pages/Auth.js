import React, { useState } from 'react';
import {useDispatch} from "react-redux"
import { useHistory } from 'react-router-dom'
import userActions from "../redux/actions"
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  color: #7067CE;
  font-size: 15px;
  margin: 1em;
  border: 2px solid white;
  border-radius: 3px;
`;

const Submit = styled.input`
  display: inline-block;
  color: #7067CE;
  font-size: 15px;
  margin: 1em;
  border: 2px solid white;
  border-radius: 3px;
`;

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 400px;
  height: 250px;
  margin: 0 auto;
  border-radius: 25px;
`;


const Login = styled.div`
`

const Auth = () => {
  const dispatch = useDispatch()
  const [login, setLogin] = useState(true);
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

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
    history.push("/home")
  };
  
  const { username, password } = userData;
 
  return (
    <div >
      <StyledLogin>
      <h1>{login ? 'Login' : 'Sign Up'}</h1>
      <Login>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        /><br/>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Submit type="submit" value={login ? 'Login' : 'Sign Up'} />
      </form>
      </Login>
      <div >
        <Button onClick={() => setLogin(true)}>Login</Button>
        or
        <Button onClick={() => setLogin(false)}>Sign Up</Button>
      </div>
      </StyledLogin>
    </div>
  );
};

export default Auth;
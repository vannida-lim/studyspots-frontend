import React, { useState } from 'react';

const Auth = (props) => {
  
  const [login, setLogin] = useState(true);
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });
  
  const handleChange = e => {
    setUserData({...userData,[e.target.name]: e.target.value});
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    setUserData({
      username: '',
      password: ''
    })
    props.history.push("/")
  };
  
  const { username, password } = userData;

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
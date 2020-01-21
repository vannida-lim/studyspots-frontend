import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';

const NavHeader = styled.div`
    max-width: 1010px;
    padding: 2px 2px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    font-family: 'Quicksand', sans-serif; font-size: 1.5em;  
    color: white;
`;

const Title = styled.h1` 
    width: 50%;
    text-align: left;
`;

const NavLinks = styled.div`
    width: 50%;
    text-align: right;
`;


const Nav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };
  return (
    <NavHeader>
      <Title><span role="img" aria-label="push pin">📍</span>StudySpots</Title>
      <NavLinks>
        <Link to="/">Home </Link><br/>
        <Link to="/auth"> Login/Signup </Link>
        <Link to="/profile"> Profile </Link>
        <Link to="/" onClick={handleLogout}>
            Logout 
        </Link>
      </NavLinks>
    </NavHeader>
  );
};

export default Nav;
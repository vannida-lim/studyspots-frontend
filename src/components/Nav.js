import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';

const NavHeader = styled.div`
    max-width: 1010px;
    padding: 20px 2px;
    width: 100%;
    display: flex;
    align-items: center;
    font-family: 'Quicksand', sans-serif; font-size: 1.5em;  
    color: white;
`;

const Title = styled.h1` 
    font-size: 1.5em
`;

const NavLinks = styled.div`
    font-size: 05.em
`;


const Nav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };
  return (
    <NavHeader>
    <div>
      <Title>
        <span role="img" aria-label="push pin">📍</span>StudySpots
        </Title>
      <NavLinks>
        <Link to="/home">Home </Link>
        <Link to="/login"> Login/Signup </Link>
        <Link to="/profile"> Profile </Link>
        <Link to="/" onClick={handleLogout}>
            Logout 
        </Link>
      </NavLinks>
      </div>
    </NavHeader>
  );
};

export default Nav;
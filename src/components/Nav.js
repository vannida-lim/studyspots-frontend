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
  font-family: 'Quicksand', sans-serif; 
  font-size: 1.5em;  
  color: white; 
`;

const Title = styled.div` 
  font-size: 1.5em
`;

const NavLinks = styled.div`
  font-size: 05.em;
  display: flex;
  
`;

const LinkDiv = styled.div`
  padding: 3%;
  justify-content: flex-end
`;


const Nav = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };

  return (
    <NavHeader>
      <Title>
        <span role="img" aria-label="push pin">📍</span>StudySpots
      </Title>
      <NavLinks>
        <LinkDiv><Link to="/home">Home </Link></LinkDiv>
        <LinkDiv><Link to='/locations'>Cafes</Link></LinkDiv>
        <LinkDiv><Link to="/profile"> Profile </Link></LinkDiv>
        <LinkDiv><Link to="/login"> Login/Signup </Link></LinkDiv>
        <LinkDiv><Link to="/" onClick={handleLogout}>Logout </Link></LinkDiv>
      </NavLinks>
    </NavHeader>
  );
};

export default Nav;
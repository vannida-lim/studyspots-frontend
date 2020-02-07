import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import { uuid } from 'uuidv4';
import styled from 'styled-components';

const Title = styled.h2`
    font-size: 1.5em;
    color: white;
    text-align: center;
`

const Location = styled.div`
    margin: 0 auto;
    font-size: 20px;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 2px 16px;
    color: white;
    box-sizing: border-box;
`
const Button = styled.button`
  display: inline-block;
  color: #7067CE;
  font-size: 15px;
  margin: 1em;
  border: 2px solid white;
  border-radius: 3px;
`;


const Profile = (props) => {
    return (
        <div>
            <Title><h2><span role="img" aria-label="sparkle-emoji">✨</span> {props.currentUser.username}'s <span role="img" aria-label="sparkle-emoji">✨</span> Favorites Spots</h2></Title>
            {props.favorites.map(cafe => 
            <Location key={uuid()}>
                <span role="img" aria-label="coffee-emoji">☕️</span> {cafe.location.name} <span role="img" aria-label="pin-emoji">📍</span>{cafe.location.location}
                <Button onClick={() => props.deleteFavorite(cafe, props.currentUser)}>Delete</Button>
            </Location>
            )}
    
        </div>
    )
    
}


const mapStateToProps = state => {
    return {
        currentUser: state.users.currentUser,
        favorites: state.favorites.favorites
    }
}

const mapDispatchToProps = {deleteFavorite: actions.deleteFromDB}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

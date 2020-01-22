import React from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions'
import { uuid } from 'uuidv4'


const Profile = (props) => {
  
    return (
        <div>
            <h1>{props.currentUser.username}'s Profile</h1>
            <h2>Favorites Spots</h2>
            {props.favorites.map(cafe => 
            <div key={uuid()}>
                {cafe.location.name} 
                {cafe.location.location}
                <button onClick={() => props.deleteFavorite(cafe, props.currentUser)}>Delete</button>
            </div>
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

const mapDispatchToProps = {deleteFavorite: actions.deleteFavorite}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components' 
import actions from '../redux/actions'
import Reviews from './Reviews'
import ReviewForm from './ReviewForm'

const Wrapper = styled.div`
    width: 32%;
    border: 1px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    padding-right: 10px;
    padding-left: 10px;
    overflow: hidden;
    background-color: white
`;

const Image = styled.img`
    width: 10em;
    height: 10em;
    margin-right: 10px
`;


const Cafe = (props) => {
    console.log(props)
    return (
        <Wrapper>
        <div>
            <h2>{props.cafe.name}</h2>
            <Image alt={props.cafe.name} src={props.cafe.image_url}/>
            <p>{props.cafe.address}</p>
            <p>Rating: {props.cafe.rating}</p>
            <p>Price: {props.cafe.price === null? "$" : props.cafe.price}</p>
            <p>Wifi: {props.cafe.has_wifi === true? "✅" : "❌"}</p>
            <p>Open Late: {props.cafe.open_late === true? "✅" : "❌"}</p>
            <Reviews/>
            <ReviewForm/>
            <button onClick={()=> props.addToFavorites(props.cafe)}>Add to Favorites</button>
        </div>
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return { 
        cafe: state.allInfoAboutCafes,
        favorite: state.users
    }
}

const mapDispatchToProps = { addToFavorites: actions.addToFavorites }

export default connect(mapStateToProps, mapDispatchToProps)(Cafe);
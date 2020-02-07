import styled from 'styled-components';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import actions from '../redux/actions';
import meow_coffee from '../meow_coffee.png';

// const GOOGLE_KEY = process.env.GOOGLE_KEY
const Image = styled.img`
  width: 10em;
  height: 10em;
`;

const style = {
  width: '1200px',
  height: '400px',
  padding: '20px'
}

export class MapContainer extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };
    
  onMarkerClick = (cafe, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: cafe,
      showingInfoWindow: true
    });
    
  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });
    
  onMapClicked = () => {
    if (this.state.showingInfoWindow)
        this.setState({
          activeMarker: null,
          showingInfoWindow: false
        });
  };

  onInfoWindowOpen = (props, e) => {
    const button = (<button id = "infoButton" onClick={e => this.props.addFavorite(this.props.currentUser, this.state.selectedPlace)}> Add to Favorites</button>);
    ReactDOM.render(React.Children.only(button), document.getElementById("iwc"));
  }

  render() {
    return (
      <Map 
      fillColor='#FF0000'
        google={this.props.google}
        style={style} 
        zoom={14}
        initialCenter={{
            lat: 40.753597,
            lng: -73.983231}}>
        {this.props.cafes.map(cafe => 
          <Marker
            key={cafe.id}
            icon={meow_coffee}
            id={cafe.id}
            name={cafe.name}
            url={cafe.url}
            price={cafe.price}
            rating={cafe.rating}
            image={cafe.image_url}
            address={cafe.address}
            onClick={this.onMarkerClick}
            position={{lat: cafe.lat, lng: cafe.lng}}
          />)}

          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}
            onOpen={e => {this.onInfoWindowOpen(this.props, e)}}>
            <div key={this.state.selectedPlace.id}>
                <h1>{this.state.selectedPlace.name}</h1>
                <div><Image alt={this.state.selectedPlace.name} src={this.state.selectedPlace.image}/></div>
                <p>{this.state.selectedPlace.address}</p>
                <a id="info-link" href={this.state.selectedPlace.url}>Click Here for More Info</a>
                <p>Ratings: {this.state.selectedPlace.rating}/5</p>
                <p>Price: {this.state.selectedPlace.price === null? "$" : this.state.selectedPlace.price}</p>
                <p>Wifi: {this.state.selectedPlace.has_wifi === true? "✅" : "❌"}</p>
                <p>Open Late: {this.state.selectedPlace.open_late === true? "✅" : "❌"}</p>
            </div>
            <div id="iwc"></div>
           </InfoWindow>
          </Map>
        );
      }
}

const mapStateToProps = (state) => {
    return {
      cafes: state.allInfoAboutCafes.cafes,
      cafe: state.allInfoAboutCafes.cafe,
      favorites: state.favorites,
      currentUser: state.users.currentUser
    }
}

const mapDispatchToProps = {
  addFavorite: actions.addFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: ("AIzaSyAX8kBYUBL1jUgZv5X7pKvfW-mitn96AA4"), v: "3.30"
})(MapContainer))
import styled from 'styled-components'
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Icon from './barista-icons_cappuccino.svg'
// import actions from '../redux/actions'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// const GOOGLE_KEY = process.env.GOOGLE_KEY
const Image = styled.img`
    width: 10em;
    height: 10em;
    
`;

const style = {
    width: '600px',
    height: '600px'
}

// const icon = 'https://drive.google.com/file/d/1S-_ln104M7BxAluD62knykteplejtdmr/view?usp=sharing'
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

    render() {
        console.log(this.state.selectedPlace)
        return (
          <Map 
            google={this.props.google}
            style={style} 
            zoom={14}
            initialCenter={{
                lat: 40.783058,
                lng: -73.971252
            }}>
            {this.props.cafes.map(cafe => 
            <Marker
                key={cafe}
                name={cafe.name}
                url={cafe.url}
                rating={cafe.rating}
                image={cafe.image_url}
                address={cafe.address}
                onClick={this.onMarkerClick}
                position={{lat: cafe.lat, lng: cafe.lng}}
            />)}

            <InfoWindow
                    marker={this.state.activeMarker}
                    onClose={this.onInfoWindowClose}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                        <div><Image alt={this.state.selectedPlace.name} src={this.state.selectedPlace.image}/></div>
                        <p>{this.state.selectedPlace.address}</p>
                        <a href={this.state.selectedPlace.url}>Click Here for More Info</a>
                        <p>Ratings: {this.state.selectedPlace.rating}/5</p>
                        <p>Price: {this.state.selectedPlace.price === null? "$" : this.state.selectedPlace.price}</p>
                        <p>Wifi: {this.state.selectedPlace.has_wifi === true? "✅" : "❌"}</p>
                        <p>Open Late: {this.state.selectedPlace.open_late === true? "✅" : "❌"}</p>
                    </div>
            </InfoWindow>
          </Map>
        );
      }
}

const mapStateToProps = (state) => {
    return {
      cafes: state.allInfoAboutCafes.cafes,
      cafe: state.allInfoAboutCafes.cafe
    }
  }

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: ("AIzaSyAX8kBYUBL1jUgZv5X7pKvfW-mitn96AA4"), v: "3.30"
})(MapContainer))
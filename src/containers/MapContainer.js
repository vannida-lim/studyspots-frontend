import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// const GOOGLE_KEY = process.env.GOOGLE_KEY

const style = {
    width: '500px',
    height: '800px'
}

export class MapContainer extends Component {

    render() {
        console.log(this.props)
        return (
          <Map 
            google={this.props.google}
            style={style} 
            zoom={14}
            initialCenter={{
                lat: 40.783058,
                lng: -73.971252
            }}>
    
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
            {/* <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow> */}
          </Map>
        );
      }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAX8kBYUBL1jUgZv5X7pKvfW-mitn96AA4"), v: "3.30"
})(MapContainer)
import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount(){ //one of our lifecycle methods that gets called automatically after this component rendered to the screen
    new google.maps.Map(this.refs.map, { //google.maps.Map this is how we create an embedded google map inside our document/ this.refs.map is where the map gets render on the screen
      zoom: 12, //this is an options object, zoom 12 gives a view of a city
      center: { //where we want to center the map (longitude and latitud)
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render (){
    return <div ref="map"></div>; //ref prop. ref in react is a reference to an html element that has been rendered to the page
  }
}

export default GoogleMap;

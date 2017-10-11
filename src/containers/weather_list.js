import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {
  renderWeather(cityData){ //contains the city data
    const name = cityData.city.name;

    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }
  
//map to get one city per row
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidiy</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) { //this is the same as state.weather
  return { weather } //This is the same as { weather: state.weather } weather from combineReducers reducers/index.js
}

export default connect(mapStateToProps)(WeatherList);

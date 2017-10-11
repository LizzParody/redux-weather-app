import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';


class WeatherList extends Component {
  renderWeather(cityData){ //contains the city data >list>main>etc...
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp); //manipulating the api, we get the list and map over it to get the temp. {main: {temp: 260, humidity: 40, pressure: 55}} is the argument we pass as weather

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </td>
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

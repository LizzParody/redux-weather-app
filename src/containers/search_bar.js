import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = { term: ''}

    this.onInputChange = this.onInputChange.bind(this); //the second this refers to the instance of SearchBar, has a function called onInputChange, bind that function to this(which is SearchBar) and replace it to this.onInputChange
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({ term: event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault(); //it tells the browser don't submit the form

    //we need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''}) //to clear the search input, so when the user clicks o press enter the search bar will be empty
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="input-group"> {/* if I have a form element, when pressing enter it will try to submit the form, we don't want that, and we don't want the user to refresh the page all the time */}
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term} //controlled component
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) { //hook up the fetchWeather with the SearchBar container
  return bindActionCreators({ fetchWeather }, dispatch)
}

//this gives us access to the function this.props.fetchWeather
export default connect(null, mapDispatchToProps)(SearchBar); //we pass null so mapDispatchToProps can be pass as a second argument, because we don't care about state in this container

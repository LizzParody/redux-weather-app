import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = { term: ''}

    this.onInputChange = this.onInputChange.bind(this); //the second this refers to the instance of SearchBar, has a function called onInputChange, bind that function to this(which is SearchBar) and replace it to this.onInputChange
  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({ term: event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault(); //it tells the browser don't submit the form
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

import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) { //empty array because is a list of pieces of weather
  //Switch statement to handle the fetch weather action type
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state]; //the same as state.concat([action.payload.data]) We don't want to mutate our state, we want to return a completely new instance of state that includes the old data and new data, state.concat can do this. Doint state.push() we are manimulating the state
  }
  return state;
}

import axios from 'axios';

const API_KEY = '8314a4a9c8dbbcf6ed50bf7128b9af21';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER' //we create a variable to keep our action types consistent btwn action creators and our reducers
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url) //axios returns a promise, a promise is a data structure that doesn't contain yet any of our request data

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request //we are returning the promise as a payload, but because of redux-promise we are returning the actual data. The reducers don't care about the promise, it cares about the data, so it stops the action and it waits until the promise is resolved and returns the data, it send that to the reducer as the payload
  };
}

import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import CityCard from './CityCard';

class WeatherContainer extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      forecast: null
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/today')
      .then(response => response.json())
      .then(forecast => this.setState({forecast}))
  }

  render() {
    const { forecast } = this.state;

    return (
        forecast && <CityCard { ...forecast.forecastday[0] } />
      )
  }
}

export default WeatherContainer;
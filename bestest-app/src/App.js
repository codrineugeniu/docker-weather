import React, { Component } from 'react';
import WeatherContainer from './components/Weather';
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to ReactWeather</h1>
        </header>
        <WeatherContainer />
      </div>
    );
  }
}

export default App;

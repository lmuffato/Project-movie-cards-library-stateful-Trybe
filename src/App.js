import React from 'react';
import Header from './components/Header';
import data from './data';
import './App.css';
import MovieLibrary from './components/MovieLibrary';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ data } />
      </div>
    );
  }
}

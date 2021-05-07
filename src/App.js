import React from 'react';
import Header from './components/Header';
import movies from './data';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ movies } />
      </div>
    );
  }
}

export default App;

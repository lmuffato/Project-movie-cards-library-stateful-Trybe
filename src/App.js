import React from 'react';
import '../node_modules/bulma/css/bulma.css';
import './App.css';
import data from './data';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data } />
    </div>
  );
}

export default App;

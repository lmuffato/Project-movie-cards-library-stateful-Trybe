import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import AddMovie from './components/AddMovie';
import movies from './data';

import './App.css';

function App() {
  function onClick(state) {
    console.log(state);
  }

  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
      <AddMovie onClick={ onClick } />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import './App.css';
import data from './data';
import MovieLibrary from './components/MovieLibrary';

function handleClick(event) {
  event.preventDefault();
  console.log(event.target);
}

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data } />
      <AddMovie onClick={ handleClick } />
    </div>
  );
}

export default App;

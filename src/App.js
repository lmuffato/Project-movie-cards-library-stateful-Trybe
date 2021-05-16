import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary />
      <AddMovie />
    </div>
  );
}

export default App;

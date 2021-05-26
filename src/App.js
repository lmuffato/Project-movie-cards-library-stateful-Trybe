import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieCard from './components/MovieCard';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie />
    </div>
  );
}

export default App;

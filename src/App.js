import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import './App.css';
import movies from './data';

function App() {
  return (
    <section className="App">
      <Header />
      <MovieLibrary movies={ movies } />
    </section>
  );
}

export default App;

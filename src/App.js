import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

function App() {
  return (
    <div className="App">
      <div className="hero">
        <h1>Coming Soon</h1>
        <h3>The Boys</h3>
      </div>
      <Header />
      <MovieLibrary movies={ movies } />
      <footer>
        <nav>Termos e aviso de privacidade</nav>
        <nav>Enviar feedback</nav>
        <nav>Ajuda©</nav>
        <nav>2021</nav>
      </footer>
    </div>
  );
}

export default App;

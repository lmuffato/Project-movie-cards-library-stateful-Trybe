// correçao dos problemas decorrentes da reformulação dos elementos
// do movie feita com ajuda do Rafael, Murilo e Adelino em call feita

import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
    </div>
  );
}

export default App;

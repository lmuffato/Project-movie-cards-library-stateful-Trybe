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

// requisito 14 realizado com a ajuda do vídeo https://trybecourse.slack.com/files/U01AYN59Y2J/F01LNLQMWTS/zoom_0.mp4

export default App;

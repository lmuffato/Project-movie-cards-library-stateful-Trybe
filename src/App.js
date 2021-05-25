import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import moviesData from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ moviesData } />
    </div>
  );
}

export default App;

/*
Agradecimentos:

Dedico este projeto do Movie Cards Library Stateful aos meus amigos de turma;
Lucas Pedroso Turma 10 - Trybo A https://github.com/LucasPedroso
Victor Canto Turma 10 - Trybo A https://github.com/victorcanto

Agradeço pelo esforço e disponibilidade deles pois sem o auxílo do Lucas e do Victor eu não teria adquirido o conhecimento
suficionte para desenvolver todos os requisitos entregues deste projeto.
*/

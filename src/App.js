import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  function onClick(state) {
    console.log(state);
  }

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie onClick={ onClick } />
    </div>
  );
}

export default App;

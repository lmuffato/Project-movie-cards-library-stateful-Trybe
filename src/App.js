import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <AddMovie onClick={ (teste) => this.setState(teste) } />
      </div>
    );
  }
}

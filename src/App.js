import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
// import movies from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default App;

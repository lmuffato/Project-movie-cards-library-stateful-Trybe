import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  onSearchTextChange = () => {

  };

  onBookmarkedChange = () => {

  };

  onSelectedGenreChange = () => {

  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText=""
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre=""
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
      </div>
    );
  }
}

import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }

  render() {
    const { input } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ input }
          onSearchTextChange={ (event) => event.target.value }
          bookmarkedOnly
          onBookmarkedChange
        />
        <MovieList />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchText:'',
      bookmarkedOnly:false,
    }
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
        SearchText={ this.state.SearchText } 
        onSearchTextChange={ (event) => this.setState({ SearchText: event.target.value }) } 
        onBookmarkedChange={ (event) => this.setState({ bookmarkedOnly: event.target.checked })}
        />
        <MovieList movies={ this.props.movies } />
        {/* <AddMovie /> */}
      </div>
    );
  }
}

export default MovieLibrary;
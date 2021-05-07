// implement AddMovie component here

import React, { Component } from 'react';
import propTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies,
    };
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState = {
      [name]: value,
    };
  }

  onClick(ev) {
    ev.preventDefault();
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    rating: propTypes.oneOfType([propTypes.string, propTypes.number]),
    imagePath: propTypes.string,
  }).isRequired,
};

export default MovieLibrary;

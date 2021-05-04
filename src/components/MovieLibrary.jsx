// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: '',
      selectedGenre: '',
    };
  }

  onSearchTextChange = (event) => {
    // event.preventDefault();
    const { value } = event.target;
    // console.log(event.target);
    this.setState({ searchText: value });
  }

  onBookmarkedChange = (event) => {
    // event.preventDefault();
    const { checked } = event.target;
    // console.log(event.target);
    // const values = event.target.type === 'checkbox'
    //   ? checked
    //   : value;
    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange = (event) => {
    // event.preventDefault();
    const { value } = event.target;
    // console.log(event.target);
    this.setState({ selectedGenre: value });
  }

  render() {
    const { movies } = this.props;
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;

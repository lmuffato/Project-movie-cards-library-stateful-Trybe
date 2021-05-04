// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handelChangeInput = (event) => {
    const { value } = event.target;
    this.setState({
      searchText: value,
    });
  }

  handelChangeChecked = (event) => {
    const { checked } = event.target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  handelChangeSelect = (event) => {
    const { value } = event.target;
    this.setState({
      selectedGenre: value,
    });
  }

  filterDataMovies = () => {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    const { movies } = this.props;

    if (bookmarkedOnly) return movies.filter((movie) => movie.bookmarked);

    if (selectedGenre !== '') return movies.filter((movie) => movie.genre.includes(selectedGenre));

    if(searchText !== '') {
      return movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText))
    }
    return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handelChangeInput }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handelChangeChecked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handelChangeSelect }
        />
        <MovieList movies={ this.filterDataMovies() } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

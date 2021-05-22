import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleBookMarkChange = this.handleBookMarkChange.bind(this);
    this.handleSelectedGenre = this.handleSelectedGenre.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleSearchText = (event) => {
    this.setState({ searchText: event.target.value });
  }

  handleBookMarkChange = (event) => {
    this.setState({ bookmarkedOnly: event.target.value });
  }

  handleSelectedGenre = (event) => {
    this.setState({ selectedGenre: event.target.value });
  }

  handleAddMovie = (newMovie) => {
    const { movies } = this.state;
    const newState = { movies: [...movies, newMovie] };
    this.setState((newState));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookMarkChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenre }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie
          onClick={ this.handleAddMovie }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

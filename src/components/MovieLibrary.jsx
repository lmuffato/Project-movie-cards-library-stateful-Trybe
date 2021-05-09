// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  newMovie = (movie) => {
    const { movies } = this.state;
    const newState = { movies: [...movies, movie] };
    this.setState((newState));
  }

  SearchText = (event) => {
    this.setState({ searchText: event.target.value });
  }

  BookMarkChange = (event) => {
    this.setState({ bookmarkedOnly: event.target.value });
  }

  SelectedGenre = (event) => {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    const { movies } = this.state;
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.SearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.BookMarkChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.SelectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.newMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

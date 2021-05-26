import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
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

    onSearchTextChange = ({ target }) => {
      this.setState({ searchText: target.value });
    };

    onSelectedGenreChange = ({ target }) => {
      this.setState({ selectedGenre: target.value });
    };

    onBookmarkedChange = ({ target }) => {
      this.setState({ bookmarkedOnly: target.checked });
    };

    onSearch = (searchText, bookmarkedOnly, selectedGenre, movies) => {
      let searchedMovies = movies;
      if (searchText !== '') {
        searchedMovies = movies.filter((movie) => movie.title.includes(searchText)
          || movie.subtitle.includes(searchText)
          || movie.storyline.includes(searchText));
      }
      if (bookmarkedOnly) {
        searchedMovies = searchedMovies.filter((movie) => movie.bookmarked);
      }
      if (selectedGenre !== '') {
        searchedMovies = searchedMovies.filter((movie) => movie.genre === selectedGenre);
      }
      return searchedMovies;
    };

    render() {
      const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

      return (
        <div>
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ this.onSearchTextChange }
            onBookmarkedChange={ this.onBookmarkedChange }
            onSelectedGenreChange={ this.onSelectedGenreChange }
            bookmarkedOnly={ bookmarkedOnly }
            selectedGenre={ selectedGenre }
          />
          <MovieList
            movies={ this.onSearch(searchText,
              bookmarkedOnly,
              selectedGenre,
              movies) }
          />
        </div>
      );
    }
}

MovieLibrary.propTypes = {
  searchText: PropTypes.string,
  bookmarkedOnly: PropTypes.boolean,
  selectedGenre: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;

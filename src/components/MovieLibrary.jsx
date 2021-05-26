import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

/* Este componente e tudo relacionado a ele, foi realizado junto com a colega Nathalia Zebral que dedicou de seu tempo para auxiliar na construção do conhecimento para realização deste. segue o pull request da colega... https://github.com/tryber/sd-010-a-project-movie-cards-library-stateful/pull/23 */

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value }, () => this.validateMovies());
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked },
      () => this.validateMovies());
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value },
      () => this.validateMovies());
  }

  validateMovies() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let newMovies = movies;
    if (searchText) {
      newMovies = newMovies.filter((movie) => (movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText)));
    }
    if (bookmarkedOnly) {
      newMovies = newMovies.filter((movie) => movie.bookmarked === true);
    }
    if (selectedGenre) {
      newMovies = newMovies.filter((movie) => movie.genre === selectedGenre);
    }
    this.setState({ movies: newMovies });
  }

  /*  slcBookmark(bookmark) {
    const { movies } = this.props;
    const filteredBookmark = movies.filter((movie) => movie.bookmarked === bookmark);
    this.setState({ movies: filteredBookmark });
  }

  slcGenre(selectedGenre) {
    const { movies } = this.props;
    const filteredGenre = movies.filter((movie) => movie.genre === selectedGenre);
    this.setState({ movies: filteredGenre });
  }

  slcMovie(text) {
    const { movies } = this.props;
    const filteredMovies = movies.filter((movie) => (movie.title.includes(text)
      || movie.subtitle.includes(text)
      || movie.storyline.includes(text)));
    this.setState({ movies: filteredMovies });
  } */

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
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

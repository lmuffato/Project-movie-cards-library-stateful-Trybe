import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    const initialStateMovieLib = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.state = initialStateMovieLib;
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleOnBookmarked = this.handleOnBookmarked.bind(this);
    this.handleSelectedGenre = this.handleSelectedGenre.bind(this);
    this.onClick = this.onClick.bind(this);
    this.filter = this.filter.bind(this);
  }

  handleSearchText(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleOnBookmarked({ target }) {
    const { checked } = target;
    if (checked) {
      this.setState({
        bookmarkedOnly: true,
      });
    } else {
      this.setState({
        bookmarkedOnly: false,
      });
    }
  }

  handleSelectedGenre({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onClick(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  filter() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let searchMovies = movies;
    if (searchText) {
      searchMovies = movies.filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }
    if (bookmarkedOnly) {
      searchMovies = movies.filter((movie) => (
        movie.bookmarked === true
      ));
    }
    if (selectedGenre) {
      searchMovies = movies.filter((movie) => (
        movie.genre === selectedGenre
      ));
    }
    return searchMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.filter();
    return (
      <div>
        <SearchBar
          onSearchTextChange={ this.handleSearchText }
          searchText={ searchText }
          onBookmarkedChange={ this.handleOnBookmarked }
          bookmarkedOnly={ bookmarkedOnly }
          onSelectedGenreChange={ this.handleSelectedGenre }
          selectedGenre={ selectedGenre }
        />
        <MovieList
          movies={ movies }

        />
        <AddMovie
          onClick={ this.onClick }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

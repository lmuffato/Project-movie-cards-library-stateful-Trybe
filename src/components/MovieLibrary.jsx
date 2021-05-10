import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component { // resuisito 15
  constructor(props) {
    super(props);
    const { movies } = this.props; // requisito 15
    this.state = { // requisito 16
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  // do AddMovie
  onClick(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  onSearchTextChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // requisito 18
  onBookmarkedChange({ target }) {
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

  // requisito 18
  onSelectedGenreChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // requisito 18
  filterMovie() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = movies;
    if (searchText) {
      filteredMovies = movies.filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }
    if (bookmarkedOnly) {
      filteredMovies = movies.filter((movie) => (
        movie.bookmarked === true
      ));
    }
    if (selectedGenre) {
      filteredMovies = movies.filter((movie) => (
        movie.genre === selectedGenre
      ));
    }
    return filteredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.filterMovie();
    return (
      <div>
        <h2> Movie Library </h2>
        <SearchBar
        // requisito 17
          onSearchTextChange={ this.onSearchTextChange }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ movies }
        />
        {/* requisito 19 */}
        <AddMovie
          onClick={ this.onClick }
        />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

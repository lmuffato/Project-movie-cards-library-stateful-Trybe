import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleSearchChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  };

  onClick = (state) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  movieFilter = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = movies;
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
    if (searchText) {
      filteredMovies = movies.filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }
    return filteredMovies;
  }

  render() {
    const movies = this.movieFilter();
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleSearchChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSearchChange }
        />
        <MovieList movies={ movies } />
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

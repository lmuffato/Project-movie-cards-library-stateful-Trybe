import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

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

    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange(stateName, value) {
    this.setState({ [stateName]: value });
  }

  filterMovies(movies, search, bookmarked, genre) {
    const moviesByGender = movies.filter((movie) => {
      if (genre.length > 0) return movie.genre === genre;
      return movie;
    });

    const moviesBySearchText = moviesByGender.filter((movie) => {
      if (search.length > 0) {
        const searchLowerCase = search.toLowerCase();
        return movie.title.toLowerCase().includes(searchLowerCase)
            || movie.subtitle.toLowerCase().includes(searchLowerCase)
            || movie.storyline.toLowerCase().includes(searchLowerCase);
      }
      return movie;
    });

    const moviesBookmarked = moviesBySearchText.filter((movie) => {
      if (bookmarked === true) return movie.bookmarked;
      return movie;
    });

    return moviesBookmarked;
  }

  addMovie(movie) {
    const { movies } = this.state;
    const newMovie = {
      title: movie.title,
      subtitle: movie.subtitle,
      storyline: movie.storyline,
      genre: movie.genre,
      rating: Number(movie.rating),
      bookmarked: movie.bookmarked,
      imagePath: movie.imagePath,
    };
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const moviesFiltered = this
      .filterMovies(movies, searchText, bookmarkedOnly, selectedGenre);
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ moviesFiltered } />
        <AddMovie onClick={ this.addMovie } />
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

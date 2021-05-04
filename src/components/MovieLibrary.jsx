import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.addMovieCard = this.addMovieCard.bind(this);
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    this.selectMovies = this.selectMovies.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleSearchBarChange({ target }) {
    const { name, value, type } = target;
    if (type === 'checkbox') {
      return this.setState({
        bookmarkedOnly: target.checked,
      });
    }
    this.setState({
      [name]: value,
    });
  }

  selectMovies() {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;
    let movieListReturned = movies;
    if (searchText !== '') {
      movieListReturned = movies
        .filter(({ title, subtitle, storyline }) => title
          .includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText));
    }
    if (selectedGenre !== '') {
      movieListReturned = movies.filter(({ genre }) => genre === selectedGenre);
    }
    if (bookmarkedOnly) {
      movieListReturned = movies
        .filter(({ bookmarked }) => bookmarked === bookmarkedOnly);
    }
    return movieListReturned;
  }

  addMovieCard(element) {
    element.preventDefault();
    const { movies } = this.state;
    this.setState({ movies: [...movies, element] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.selectMovies();
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchBarChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleSearchBarChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ (element) => {
            this.handleSearchBarChange(element);
            this.selectMovies(element);
          } }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovieCard } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieLibrary;

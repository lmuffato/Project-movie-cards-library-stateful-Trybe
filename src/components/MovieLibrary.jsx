import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.setMovies = this.setMovies.bind(this);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movieList: movies,
    };
  }

  onClick(movieList, newMovie) {
    this.setState({ movieList: [...movieList, newMovie] });
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  setMovies(movies) {
    this.setState({ movieList: movies });
  }

  filterMovies(movies) {
    let filteredMovies = movies;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    filteredMovies = filteredMovies.filter((movie) => {
      const { title, subtitle, storyline } = movie;
      if (title.includes(searchText)) return movie;
      if (subtitle.includes(searchText)) return movie;
      if (storyline.includes(searchText)) return movie;
      return null;
    });
    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked === true);
    }
    filteredMovies = filteredMovies.filter((movie) => movie.genre.includes(
      selectedGenre,
    ));
    return filteredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movieList } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList
          movies={ this.filterMovies(movieList) }
        />
        <AddMovie list={ movieList } onClick={ this.onClick } movieList={ movieList } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

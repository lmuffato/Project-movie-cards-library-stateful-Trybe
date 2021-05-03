import React from 'react';
import Proptypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSearchTextChange = (event) => {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange = (event) => {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange = (event) => {
    this.setState({ selectedGenre: event.target.value });
  }

  handleClick = () => {

  }

  genreFiltered = (moviesList) => {
    const { selectedGenre } = this.state;
    if (selectedGenre === '') {
      return moviesList;
    }
    return (moviesList.filter((movie) => movie.genre === selectedGenre));
  }

  textFiltered = (moviesList) => {
    const { searchText } = this.state;
    if (searchText === '') {
      return moviesList;
    }
    return (
      moviesList.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText))
    );
  }

  bookMarkedFiltered = (moviesList) => {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === false) {
      return moviesList;
    }
    return moviesList.filter((movie) => movie.bookmarked === true);
  }

  render() {
    const { movies } = this.props;
    const filteredByGenre = this.genreFiltered(movies);
    const filteredByText = this.textFiltered(filteredByGenre);
    const filteredByBookmark = this.bookMarkedFiltered(filteredByText);
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ filteredByBookmark } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: Proptypes.arrayOf(Object).isRequired,
};

export default MovieLibrary;

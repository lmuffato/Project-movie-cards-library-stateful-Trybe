import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
// import AddMovie from './AddMovie';

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

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { movies } = this.state;

    const filteredBookmarkeds = movies.filter((movie) => movie.bookmarked === true);
    const filteredGenre = movies.filter((movie) => movie.genre === selectedGenre);
    const filteredWords = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));

    if (bookmarkedOnly !== false) {
      movies = filteredBookmarkeds;
    }

    if (selectedGenre) {
      movies = filteredGenre;
    }

    if (searchText) {
      movies = filteredWords;
    }

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={
            (event) => this.setState({ searchText: event.target.value })
          }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={
            (event) => this.setState({ bookmarkedOnly: event.target.value })
          }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={
            (event) => this.setState({ selectedGenre: event.target.value })
          }
        />
        <MovieList movies={ movies } />
        {/* <AddMovie onClick={ onClick } /> */}
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.object,
}.isRequired;

export default MovieLibrary;

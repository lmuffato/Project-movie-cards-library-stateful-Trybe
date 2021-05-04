// implement AddMovie component here
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

  changeHandler = (event) => {
    const { name } = event.target;
    let { value } = event.target;
    if (name === 'bookmarkedOnly') value = event.target.checked;
    this.setState({ [name]: value });
  }

  addNewMovie = (newMovie) => {
    this.setState((oldState) => ({
      movies: [...oldState.movies, newMovie],
    }));
  }

  // moviesFiltered = () => {
  //   let { movies } = this.state;
  //   const { searchText, bookmarkedOnly, selectedGenre } = this.state;
  //   const filterByBookmarked = movies.filter((movie) => movie.bookmarked === true);
  //   const filterByGenre = movies.filter((movie) => movie.genre === selectedGenre);
  //   const filterBytext = movies.filter(
  //     (movie) => movie.title.includes(searchText)
  //     || movie.subtitle.includes(searchText)
  //     || movie.storyLine.includes(searchText),
  //   );
  //   if (bookmarkedOnly === true) movies = filterByBookmarked;
  //   if (selectedGenre) movies = filterByGenre;
  //   if (searchText) movies = filterBytext;
  //   this.setState({ movies });
  // }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { movies } = this.state;
    const filterByBookmarked = movies.filter((movie) => movie.bookmarked === true);
    const filterByGenre = movies.filter((movie) => movie.genre === selectedGenre);
    const filterBytext = movies.filter(
      (movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText),
    );
    if (bookmarkedOnly === true) movies = filterByBookmarked;
    if (selectedGenre) movies = filterByGenre;
    if (searchText) movies = filterBytext;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeHandler }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.changeHandler }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.changeHandler }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addNewMovie } />
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

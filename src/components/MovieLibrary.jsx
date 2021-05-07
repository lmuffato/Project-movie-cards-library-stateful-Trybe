import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

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

  handleCheckboxEvent = (event) => {
    const { movies } = this.props;
    if (event.target.checked) {
      this.setState({
        bookmarkedOnly: event.target.checked,
      });

      const checkMovies = movies.filter((movie) => movie.bookmarked === true);
      this.setStateMovie(checkMovies);
    }
  }

  handleSearchText = (event) => {
    const { movies } = this.props;
    const { searchText } = this.state;
    this.setState({
      searchText: event.target.value,
    });

    const searchMovies = movies.filter((movie) => movie.title.includes(searchText)
    || movie.subtitle.includes(searchText)
    || movie.storyline.includes(searchText));
    this.setStateMovie(searchMovies);
  }

  handleSelectGenre = (event) => {
    const { movies } = this.props;
    this.setState({
      selectedGenre: event.target.value,
    });
    const selectGenre = movies.filter((movie) => movie.genre === event.target.value);
    this.setStateMovie(selectGenre);
  }

  handleAddMovie = (state) => {
    console.log('entrou');
    const { movies } = this.props;
    movies.push({ title: state.title,
      subtitle: state.subtitle,
      imagePath: state.imagePath,
      rating: state.rating,
      genre: state.genre });
    this.setStateMovie(movies);
  }

  setStateMovie = (newMovies) => {
    this.setState({
      movies: newMovies,
    });
  }

  render() {
    const { movies: newMovies } = this.state;
    const { bookmarkedOnly } = this.state;
    const { searchText } = this.state;
    const { selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleCheckboxEvent }
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchText }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectGenre }
        />
        <MovieList movies={ newMovies } />
        <AddMovie onClick={ this.handleAddMovie } />
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

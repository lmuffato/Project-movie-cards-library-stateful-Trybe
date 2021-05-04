import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
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

    this.handleCheckboxEvent = this.handleCheckboxEvent.bind(this);
  }

  handleCheckboxEvent = (event) => {
    const { movies } = this.props;
    if (event.target.checked) {
      this.setState({
        bookmarkedOnly: event.target.checked,
      });

      const checkMovies = movies.filter((movie) => movie.bookmarked === true);
      this.setState({
        movies: checkMovies,
      });
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
    this.setState({
      movies: searchMovies,
    });
  }

  handleSelectGenre = (event) => {
    const { movies } = this.props;
    console.log(event.target.value);
    this.setState({
      selectedGenre: event.target.value,
    });
    const selectGenre = movies.filter((movie) => movie.genre === event.target.value);
    this.setState({
      movies: selectGenre,
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

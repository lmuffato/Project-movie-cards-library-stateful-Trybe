import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.newMovieCreator = this.newMovieCreator.bind(this);

    this.state = {
      searchText: '',
      selectedGenre: '',
      bookmarkedOnly: false,
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    const { movies } = this.props;
    const allMovies = movies;
    function movieFinder(movie) {
      return movie.title.includes(value) === true
    || movie.subtitle.includes(value) === true
    || movie.storyline.includes(value) === true;
    }
    this.setState({
      [name]: value,
      movies: allMovies.filter(movieFinder),
    });
    if (value === '') {
      this.setState({
        movies,
      });
    }
  }

  onBookmarkedChange({ target }) {
    const { name, checked } = target;
    const { movies } = this.props;
    const allMovies = movies;
    this.setState({
      [name]: checked,
      movies,
    });
    if (checked === true) {
      this.setState({
        movies: allMovies.filter((movie) => (movie.bookmarked === true)),
      });
    }
  }

  onSelectedGenreChange({ target }) {
    const { name, value } = target;
    const { movies } = this.props;
    const allMovies = movies;
    this.setState({
      [name]: value,
      movies: allMovies.filter((movie) => (movie.genre === value)),
    });
    if (value === '') {
      this.setState({
        movies,
      });
    }
  }

  newMovieCreator(event) {
    event.preventDefault();
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const searchBar = {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onBookmarkedChange: this.onBookmarkedChange,
      onSearchTextChange: this.onSearchTextChange,
      onSelectedGenreChange: this.onSelectedGenreChange,
    };

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar { ...searchBar } />
        <MovieList movies={ movies } />
        <AddMovie
          newMovieCreator={ this.newMovieCreator }
        />
      </div>
    );
  }
}

MovieLibrary.defaultProps = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }),
};

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }),
};

export default MovieLibrary;

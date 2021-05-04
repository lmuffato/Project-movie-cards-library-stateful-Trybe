import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange(event) {
    const { target: { value } } = event;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange(event) {
    const { target: { checked } } = event;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange(event) {
    const { target: { value } } = event;
    this.setState({
      selectedGenre: value,
    });
  }

  onClick(movieData) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movieData],
    });
  }

  filter(array, { bookmarkedOnly, selectedGenre, searchText }) {
    let maybeFiltered = array;
    maybeFiltered = bookmarkedOnly
      ? maybeFiltered.filter(({ bookmarked }) => bookmarked === true) : maybeFiltered;
    maybeFiltered = selectedGenre
      ? maybeFiltered.filter(({ genre }) => genre === selectedGenre) : maybeFiltered;
    maybeFiltered = searchText
      ? maybeFiltered.filter((
        { title, subtitle, storyline },
      ) => [title, subtitle, storyline].reduce(
        (acc, cur) => (cur.includes(searchText) ? true : acc),
        false,
      )) : maybeFiltered;
    return maybeFiltered;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const searchBarProps = {
      searchText,
      onSearchTextChange: this.onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange: this.onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange: this.onSelectedGenreChange,
    };
    const filteredMovies = this.filter(movies, { ...searchBarProps });
    return (
      <>
        <SearchBar { ...searchBarProps } />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.onClick } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
      bookmarked: PropTypes.bool,
      genre: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieLibrary;

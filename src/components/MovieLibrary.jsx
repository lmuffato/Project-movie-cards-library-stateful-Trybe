import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import films from '../data';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movie: movies,
    };
    this.callBackSearchText = this.callBackSearchText.bind(this);
    this.callBackBookMarked = this.callBackBookMarked.bind(this);
    this.callBackSelectGenre = this.callBackSelectGenre.bind(this);
    this.functionAddMovie = this.functionAddMovie.bind(this);
    this.filterArr = this.filterArr.bind(this);
  }

  filterArr(event) {
    const { movie, searchText } = this.state;
    const { value } = event.target;
    this.setState({ searchText: value });
    if (searchText !== '') {
      const arr = movie.filter((film) => film.title === searchText);
      console.log(arr);
    }
  }

  callBackSelectGenre(event) {
    const { value } = event.target;
    // const { movie } = this.state;
    const arr = films.filter((film) => film.genre === value);
    if (value === '') return this.setState({ movie: films });
    this.setState({ selectedGenre: value, movie: arr });
  }

  callBackBookMarked(event) {
    const { checked } = event.target;
    const arr = films.filter((film) => film.bookmarked);
    if (checked !== true) return this.setState({ bookmarkedOnly: false, movie: films });
    this.setState({ bookmarkedOnly: checked, movie: arr });
  }

  callBackSearchText(event) {
    const { value } = event.target;
    const { movie } = this.state;
    const arr = movie.filter((film) => film.title === value);
    this.setState({ searchText: value, movie: arr });
  }

  functionAddMovie() {
    // this.setState({})
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movie } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.filterArr }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.callBackBookMarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.callBackSelectGenre }
        />
        <MovieList movies={ movie } />
        <AddMovie onClick={ this.functionAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

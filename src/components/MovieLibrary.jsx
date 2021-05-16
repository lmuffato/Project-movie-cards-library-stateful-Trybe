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
      movie: movies,
    };
    this.callBackSearchText = this.callBackSearchText.bind(this);
    this.callBackBookMarked = this.callBackBookMarked.bind(this);
    this.callBackSelectGenre = this.callBackSelectGenre.bind(this);
    this.functionAddMovie = this.functionAddMovie.bind(this);
    this.filterArr = this.filterArr.bind(this);
  }

  filterArr() {
    const { movie, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const arrfrilter = movie.filter((film) => (film.title.includes(searchText)
      || film.subtitle.includes(searchText) || film.storyline.includes(searchText)));
    if (bookmarkedOnly === true) {
      return arrfrilter.filter((film) => film.bookmarked)
        .filter((film) => film.genre.includes(selectedGenre));
    }
    return arrfrilter.filter((film) => film.genre.includes(selectedGenre));
  }

  callBackSearchText(event) {
    this.setState({ searchText: event.target.value });
  }

  callBackSelectGenre(event) {
    const { value } = event.target;
    this.setState({ selectedGenre: value });
  }

  callBackBookMarked(event) {
    const { checked } = event.target;
    this.setState({ bookmarkedOnly: checked });
  }

  functionAddMovie(object) {
    const { movies } = this.props;
    this.setState({ movie: [...movies, object] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filteredFilm = this.filterArr();
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.callBackSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.callBackBookMarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.callBackSelectGenre }
        />
        <MovieList movies={ filteredFilm } />
        <AddMovie onClick={ this.functionAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

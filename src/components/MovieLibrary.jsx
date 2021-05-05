// implement AddMovie component here
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

    this.onClick = this.onClick.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.setGenreFilter = this.setGenreFilter.bind(this);
    this.setBookMarked = this.setBookMarked.bind(this);
  }

  onClick(movie) {
    console.log('onClick acionada! Hora de adicionar o filme.');
    console.log(movie);
  }

  setSearch(value) {
    this.setState({
      searchText: value,
    });
  }

  setGenreFilter(value) {
    this.setState({
      selectedGenre: value,
    });
  }

  setBookMarked(value) {
    this.setState({
      bookmarkedOnly: value,
    });
  }

  render() {
    let { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    // Filtrando quais filmes serão renderizados.
    movies = bookmarkedOnly ? movies.filter((movie) => movie.bookmarked) : movies;
    movies = selectedGenre ? movies.filter((movie) => movie.genre === selectedGenre)
      : movies;
    movies = searchText ? movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyLine.include(searchText)) : movies;
    return (
      <div className="encapsula-MovieLibrary">
        <h2>My awesome movie library</h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = PropTypes.shape({
  onClick: PropTypes.func,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyLine: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
}).isRequerid;

export default MovieLibrary;

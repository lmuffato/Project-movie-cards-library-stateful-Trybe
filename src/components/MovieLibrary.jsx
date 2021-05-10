// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);

    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  onSelectedGenreChange({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  addNewMovie(str) {
    console.log(str);
    this.setState((estadoAnterior) => ({
      movies: [...estadoAnterior.movies, str],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { movies } = this.state;

    movies = selectedGenre !== '' ? movies
      .filter((movie) => movie.genre === selectedGenre) : movies;

    movies = bookmarkedOnly !== false ? movies
      .filter((movie) => movie.bookmarked === true) : movies;

    movies = searchText !== '' ? movies
      .filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText)) : movies;

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}
// https://ricardo-reis.medium.com/operador-tern%C3%A1rio-do-javascript-7de7855d9202 agradecimento mais que especial ao
// artigo desse blog sobre operadores ternários, havia tentado fazer a validação do filter sem atribuir ao movies e estava
// obviamente dando errado. Quando tentei o lint reclamou por movies ser uma const, então o desestruturei separadamente
// como uma let.

// Agradecimento especial ao Adelino Júnior e ao Wanderson Sales por me ajudarem nos respectivos requisitos 19 e 17.

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    // const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // declarei este state baseado no código da Ana Ventura para que a renderização seja feita dinamicamente via setState
      movies: props.movies,
    };
  }

  onSearchTextChange = (event) => {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  onBookmarkedChange = (event) => {
    const { checked } = event.target;
    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange = (event) => {
    const { value } = event.target;
    this.setState({ selectedGenre: value });
  }
  // esssa função onCLick fiz baseado nas dicas da Ana Ventura e Elisa França e por consultas nas PR do João Nascimento e Ana Ventura

  handleAddMovie = (newMovie) => {
    const { movies } = this.state;
    const newState = { movies: [...movies, newMovie] };
    this.setState((newState));
    console.log(newState);
    console.log(newMovie);
  }

  darkMode = () => {
    const element = document.body;
    element.classList.toggle('dark-mode');
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    // antes eu estava declarando o movies com const mas percebi que era necessário
    // o let pois a cada click do botão o state movies é alterado
    let { movies } = this.state;
    // Este filtro abaixo fiz baseado no código do PR da Ana Ventura e com a seguinte documentação:
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    // e o vídeo: https://www.youtube.com/watch?v=-HQaDfVPCtg
    const filterByTitle = movies
      .filter((movie) => movie.title
        .includes(searchText) || movie.subtitle
        .includes(searchText) || movie.storyline.includes(searchText));

    const filterByBookMark = movies.filter((movie) => movie.bookmarked === true);
    const filterByGenre = movies.filter((movie) => movie.genre === selectedGenre);
    if (bookmarkedOnly) movies = filterByBookMark;
    if (selectedGenre) movies = filterByGenre;
    if (searchText) movies = filterByTitle;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <span className="dark-mode-span">Dark Mode</span>
        <label className="dark-mode-label" htmlFor="dark-mode">
          <input
            onClick={ this.darkMode }
            id="dark-mode"
            className="dark-mode"
            type="checkbox"
          />
          <div className="ball" />
        </label>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
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

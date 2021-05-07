import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
// Tive dificuldades para posicionar a lógica do filtro, e encontrei informações no trabalho desenvolvido
// pela Elisa França: https://github.com/tryber/sd-010-a-project-movie-cards-library-stateful/pull/52/files

// Resolução da função de adicionar filmes baseada na resolução de Pollyana, PR-GitHUb: https://github.com/tryber/sd-010-a-project-movie-cards-library-stateful/pull/8/files
// Refatorado o filtro de filmes, para limpar render, adicionado em função, como na resolução da Pollyana.

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.searchBarHandleChange = this.searchBarHandleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
  }

  onClick(state) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, state],
    });
  }

  searchBarHandleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  filterMovie() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filtredMovies = movies;
    if (searchText) {
      filtredMovies = movies.filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }
    if (bookmarkedOnly) {
      filtredMovies = movies.filter((movie) => (
        movie.bookmarked === true
      ));
    }
    if (selectedGenre) {
      filtredMovies = movies.filter((movie) => (
        movie.genre === selectedGenre
      ));
    }
    return filtredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movies = this.filterMovie();
    return (
      <main>

        <h2> My awesome movie library </h2>

        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.searchBarHandleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.searchBarHandleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.searchBarHandleChange }
        />

        <section className="class-movieList">
          <MovieList
            movies={ movies }
          />
        </section>
        <div>
          <AddMovie
            onClick={ this.onClick }
          />
        </div>
      </main>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

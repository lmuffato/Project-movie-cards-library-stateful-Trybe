// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  handleSearchText = (event) => {
    this.setState({ searchText: event.target.value });
  }

  handleBookMarkChange = (event) => {
    this.setState({ bookmarkedOnly: event.target.value });
  }

  handleSelectedGenre = (event) => {
    this.setState({ selectedGenre: event.target.value });
  }

  handleAddMovie = (newMovie) => {
    const { movies } = this.state;
    const newState = { movies: [...movies, newMovie] };
    this.setState((newState));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { movies } = this.state;

    const filterByTitle = movies.filter(
      (movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText),
    );
    const filterByBookMark = movies.filter((movie) => movie.bookmarked === true);
    const filterByGenre = movies.filter((movie) => movie.genre === selectedGenre);

    if (bookmarkedOnly) movies = filterByBookMark;
    if (selectedGenre) movies = filterByGenre;
    if (searchText) movies = filterByTitle;

    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookMarkChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenre }
        />
        <MovieList
          movies={ movies }
        />
        <AddMovie
          onClick={ this.handleAddMovie }
        />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// Referências:
// Para a lógica dos filtros do requisito 18:
// https://github.com/tryber/sd-09-project-movie-cards-library-stateful/pull/89/files
// https://github.com/tryber/sd-010-a-project-movie-cards-library-stateful/pull/57/files
// Função handleAddMovie:
// https://github.com/anaventura1811/project-frontend-react/blob/todo-list-react-app/src/componentes/ToDoList/Todolist.jsx
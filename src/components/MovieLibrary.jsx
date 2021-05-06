import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

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
  }

  /*   onClick({ addNewMovie }) {
    this.setState((state) => ({
      movies: [...state.movies, addNewMovie],
    }));
  } */

  searchBarHandleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  render() {
    let { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    const fByText = movies.filter((movie) => movie.title.includes(searchText)
    || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText));
    const fByBookmarked = movies.filter((movie) => movie.bookmarked === true);
    const fBySelectedGenre = movies.filter((movie) => movie.genre === selectedGenre);

    if (searchText) {
      movies = fByText;
    }
    if (bookmarkedOnly) {
      movies = fByBookmarked;
    }
    if (selectedGenre) {
      movies = fBySelectedGenre;
    }

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
          <AddMovie onClick={ this.onClick } />
        </div>
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.objects).isRequired,
};

export default MovieLibrary;

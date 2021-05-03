import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

/**
 * Consultei o repositório da malves0 para resolver o requisito 16.
 * link: https://github.com/tryber/sd-09-project-movie-cards-library-stateful/tree/malves0-movie-cards-library-stateful
 */
export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ (event) => this.setState({
            searchText: event.target.value,
          }) }
          onBookmarkedChange={ (event) => this.setState({
            bookmarkedOnly: event.target.value,
          }) }
          onSelectedGenreChange={ (event) => this.setState({
            selectedGenre: event.target.value,
          }) }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.string,
}.isRequired;

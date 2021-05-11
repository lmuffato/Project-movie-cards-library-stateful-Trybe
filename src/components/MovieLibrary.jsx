import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

// nesse projeto tive auxilio dos colegas Rafael Medeiros e Vinicius Rodrigues, cooperação e troca de ideias

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly, onClick } = this.state;
    const { movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          selectedGenre={ selectedGenre }
          bookmarkedOnly={ bookmarkedOnly }
          onSearchTextChange={ (e) => this.setState({ searchText: e.target.value }) }
          onBookmarkedChange={
            (e) => this.setState({ bookmarkedOnly: e.target.value })
          }
          onSelectedGenreChange={
            (e) => this.setState({ selectedGenre: e.target.value })
          }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;

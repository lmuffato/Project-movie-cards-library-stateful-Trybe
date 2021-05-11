import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

// nesse projeto tive auxilio dos colegas Rafael Medeiros e Vinicius Rodrigues,Anderson Silva cooperação e troca de ideias

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

  filtraPreferidos = (param) => {
    // const { bookmarkedOnly } = this.state;
    param.filter(({ bookmarked }) => bookmarked === true);
  }

  filtrraGenero = (param) => {
    const { selectedGenre } = this.state;
    return param.filter(({ genre }) => genre === selectedGenre);
  }

  filtraText = (param) => {
    const { searchText } = this.state;
    return param.filter(({ title, subtitle, storyline }) => (
      title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText)
    ));
  }

  onClick = (movie) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  }

  render() {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    let { movies } = this.state;
    if (bookmarkedOnly) movies = this.filtraPreferidos(movies);
    if (selectedGenre) movies = this.filtrraGenero(movies);
    if (searchText) movies = this.filtraText(movies);
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
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;

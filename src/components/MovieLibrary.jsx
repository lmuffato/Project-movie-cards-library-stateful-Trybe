import React, { Component } from 'react';
import MovieList from './MovieList';

import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.handleChange = this.handleChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
      allMovies: movies,
    };
  }

  handleChange({ target }, name) {
    const { type, checked, value } = target;
    const fixedValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: fixedValue });
  }

  filterMovies() {
    const { bookmarkedOnly, searchText, allMovies, selectedGenre } = this.state;

    if (bookmarkedOnly) return allMovies.filter(({ bookmarked }) => bookmarked);

    if (selectedGenre !== '') {
      return allMovies.filter(({ genre }) => genre === selectedGenre);
    }

    if (searchText) {
      return allMovies.filter(({ title, subtitle, storyline }) => (
        title.toLowerCase().includes(searchText.toLowerCase())
            || subtitle.toLowerCase().includes(searchText.toLowerCase())
            || storyline.toLowerCase().includes(searchText.toLowerCase())
      ));
    }

    return allMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { movies } = this.state;
    movies = this.filterMovies();

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ (event) => this.handleChange(event, 'searchText') }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ (event) => this.handleChange(event, 'bookmarkedOnly') }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ (event) => this.handleChange(event, 'selectedGenre') }
        />
        <MovieList movies={ movies } />
      </div>
    );
  }
}

export default MovieLibrary;

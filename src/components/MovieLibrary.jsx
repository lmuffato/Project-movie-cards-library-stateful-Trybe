// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      allMovies: movies,
    };
  }

  handelChangeInput = (event) => {
    const { value } = event.target;
    this.setState({
      searchText: value,
    });
  }

  handelChangeChecked = (event) => {
    const { checked } = event.target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  handelChangeSelect = (event) => {
    const { value } = event.target;
    this.setState({
      selectedGenre: value,
    });
  }

  handleClick = (event, movie) => {
    event.preventDefault();
    this.setState((anterior) => ({
      allMovies: [...anterior.allMovies, movie],
    }));
  }

  filterDataMovies = () => {
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    const { allMovies } = this.state;

    if (bookmarkedOnly) return allMovies.filter((movie) => movie.bookmarked);

    if (selectedGenre !== '') {
      return allMovies
        .filter((movie) => movie.genre.includes(selectedGenre));
    }

    if (searchText !== '') {
      return allMovies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    }
    return allMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handelChangeInput }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handelChangeChecked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handelChangeSelect }
        />
        <MovieList movies={ this.filterDataMovies() } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

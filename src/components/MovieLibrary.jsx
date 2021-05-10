import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  // onSearchTextChange = ({ target: { value } }) => {
  //   this.setState({ searchText: value });
  // }

  handleValue = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  onClick = (newMovie) => {
    const { movies } = this.state;
    return movies.push(newMovie);
  };

  filteresMovies = () => {
    const { movies, searchText } = this.state;
    return movies
      .filter(({ title, subtitle, storyline }) => title
        .includes(searchText) || subtitle
        .includes(searchText) || storyline
        .includes(searchText));
  };

  render() {
    // const { movies } = this.state;
    // const { onBookmarkedChange, onSearchTextChange, onSelectedGenreChange } = this;
    const { handleValue } = this;
    const { bookmarkedOnly, searchText, selectedGenre } = this.state;
    // const filteresMovies = movies
    //   .filter(({ title, subtitle, storyline }) => title
    //     .includes(searchText) || subtitle
    //     .includes(searchText) || storyline
    //     .includes(searchText));
    const fil = this.filteresMovies();
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ handleValue }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleValue }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ handleValue }
        />
        <MovieList movies={ fil } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
    push: PropTypes.func,
  }).isRequired,
};

export default MovieLibrary;

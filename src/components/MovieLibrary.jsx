// implement AddMovie component here.
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleSearchChange = ({ target }) => {
    const { value } = target;
    this.setState = {
      searchText: value,
    };
  }

  handleGenderChange = ({ target }) => {
    const { value } = target;
    this.setState = {
      selectedGenre: value,
    };
  }

  handleChecked = ({ target }) => {
    const { checked } = target;
    this.setState = {
      bookmarkedOnly: checked,
    };
  }

  handleClick = (newMovie) => {
    this.setState(({ movies }) => ({
      movies: [movies, newMovie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookMarkedChange={ this.handleChecked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleGenderChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MovieLibrary;

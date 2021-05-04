import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
// import data from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.addMovieCard = this.addMovieCard.bind(this);
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleSearchBarChange({ target }) {
    const { name, value, type } = target;
    if (type === 'checkbox') {
      return this.setState({
        bookmarkedOnly: target.checked,
      });
    }
    this.setState({
      [name]: value,
    });
  }

  addMovieCard(e) {
    e.preventDefault();
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchBarChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleSearchBarChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSearchBarChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovieCard } />
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
  }).isRequired,
};

export default MovieLibrary;

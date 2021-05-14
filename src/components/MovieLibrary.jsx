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
      movieList: movies,
    };

    this.textChanged = this.textChanged.bind(this);
    this.bookMarkeChanged = this.bookMarkeChanged.bind(this);
    this.selectedGenre = this.selectedGenre.bind(this);
    this.setNewCard = this.setNewCard.bind(this);
  }

  textChanged = ({ target }) => {
    this.setState({ searchText: target.value });
  }

  bookMarkeChanged = ({ target }) => {
    this.setState({ bookmarkedOnly: target.checked });
  }

  selectedGenre = ({ target }) => {
    this.setState({ selectedGenre: target.value });
  }

  setNewCard = (receiving) => {
    const { movieList } = this.state;
    this.setState({
      movieList: [...movieList, receiving],
    });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movieList,
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.textChanged }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.bookMarkeChanged }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectedGenre }
        />
        <MovieList movies={ movieList } />
        <AddMovie onClick={ this.setNewCard } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;

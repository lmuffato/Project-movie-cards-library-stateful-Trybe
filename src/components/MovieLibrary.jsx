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
    this.filteringBook = this.filteringBook.bind(this);
    this.filteringGenre = this.filteringGenre.bind(this);
    this.filteringText = this.filteringText.bind(this);
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

  filteringText = () => {
    const { searchText, selectedGenre, bookmarkedOnly, movieList } = this.state;
    const text = movieList.filter(
      (e) => e.title.toLowerCase().includes(searchText)
      || e.title.includes(searchText) || e.subtitle.toLowerCase().includes(searchText)
      || e.subtitle.includes(searchText) || e.storyline.toLowerCase().includes(searchText)
      || e.storyline.includes(searchText),
    );
    if (bookmarkedOnly) {
      return this.filteringBook();
    }
    if (selectedGenre !== '') {
      return this.filteringGenre();
    }
    if (searchText !== '') {
      return text;
    }
    return movieList;
  }

  filteringGenre = () => {
    const { selectedGenre, movieList } = this.state;
    const genreSelec = movieList.filter((e) => e.genre === selectedGenre);
    return genreSelec;
  }

  filteringBook = () => {
    const { movieList } = this.state;
    const bookMarked = movieList.filter((e) => e.bookmarked);
    return bookMarked;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    this.filteringText();
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
        <MovieList movies={ this.filteringText() } />
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

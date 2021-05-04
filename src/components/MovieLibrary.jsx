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

    this.handleSearch = this.handleSearch.bind(this);
    this.handleBook = this.handleBook.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleSearch(event) {
    console.log(event);
  }

  handleBook(event) {
    console.log(event);
  }

  handleSelected(event) {
    console.log(event);
  }

  handleOnClick(event) {
    console.log(event.target);
    event.preventDefault();
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearch }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBook }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelected }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleOnClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.objectOf.isRequired,
};

export default MovieLibrary;

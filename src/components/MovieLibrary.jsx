import React from 'react';
import SearchBar from './SearchBar';

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

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.handleSearch }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.handleBook }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.handleSelected }
      />
    );
  }
}

export default MovieLibrary;

// searchText, uma string
// bookmarkedOnly, um boolean
// selectedGenre, uma string

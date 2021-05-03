import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

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
    console.log(event);
  }

  render() {
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
        <AddMovie onClick={ this.handleOnClick } />
      </div>
    );
  }
}

export default MovieLibrary;

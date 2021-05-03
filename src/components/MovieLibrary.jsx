import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: this.props.movies
    };
  }

  handleSearchText = (event) => {
    this.setState({ searchText: event.target.value });
  }

  handleBookMarkChange = (event) => {
    this.setState({ bookmarkedOnly: event.target.value });
  }

  handleSelectedGenre = (event) => {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookMarkChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

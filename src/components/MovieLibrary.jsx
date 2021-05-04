import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor() {
    super();
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleText = (event) => {
    const { value } = event.target;
    this.setState({
      searchText: value,
    });
  }

  handleBookedMarked = (event) => {
    const { value } = event.target;
    this.setState({
      bookmarkedOnly: value,
    });
  }

  handleSelectedGenre = (event) => {
    const { value } = event.target;
    this.setState({
      selectedGenre: value,
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookedMarked }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenre }
        />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

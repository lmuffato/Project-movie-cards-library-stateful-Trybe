import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  handleAddMovie = (movie) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
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
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieLibrary.defaultProps = {
  movies: [],
};

export default MovieLibrary;

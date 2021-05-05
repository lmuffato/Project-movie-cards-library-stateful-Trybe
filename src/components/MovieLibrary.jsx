// implement AddMovie component here
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
      movies
    };
  }

  textChange = (event) => {
    console.log(event.target.value);
    this.setState({
      searchText: event.target.value,
    });
  }

  markedChange = (event) => {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  genreChange = (event) => {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.textChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.markedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.genreChange }
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

export default MovieLibrary;

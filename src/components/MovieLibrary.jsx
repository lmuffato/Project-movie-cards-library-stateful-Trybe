import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.func = this.func.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: { movies },
    };
  }

  func() {
    console.log('a');
    // this.setState({
    //   movies: addMovie,
    // });
  }

  callBack() {
    let sum = 0;
    sum += 1;
    console.log(sum);
  }

  render() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { callBack } = this;
    console.log(this.state);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ callBack }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ callBack }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ callBack }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.func } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

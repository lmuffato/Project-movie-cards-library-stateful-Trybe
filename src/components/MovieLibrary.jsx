import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.onChangeHandle = this.onChangeHandle.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onChangeHandle({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(name);
    console.log(value);

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { movies } = this.props;

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          { ...this.state }
          onSearchTextChange={ this.onChangeHandle }
          onBookmarkedChange={ this.onChangeHandle }
          onSelectedGenreChange={ this.onChangeHandle }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ (state) => console.log(state) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies: this.props.movies,
    };
  }

  render() {
    return (
      <h1>qualquer coisa</h1>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default MovieLibrary;

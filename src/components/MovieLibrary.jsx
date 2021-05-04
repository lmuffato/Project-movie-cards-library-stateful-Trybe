// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(),
};

export default MovieLibrary;

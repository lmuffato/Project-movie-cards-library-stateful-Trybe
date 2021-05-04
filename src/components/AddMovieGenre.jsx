import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genre extends Component {
  render() {
    const { genre, handleInputs } = this.props;

    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          id="genre-input"
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ handleInputs }
        >
          <option data-testid="genre-option" value={ action }>Ação</option>
          <option data-testid="genre-option" value={ comedy }>Comédia</option>
          <option data-testid="genre-option" value={ thriller }>Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  handleInputs: PropTypes.func.isRequired,
};

export default Genre;

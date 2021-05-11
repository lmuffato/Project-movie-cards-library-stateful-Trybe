import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreInput extends Component {
  render() {
    const { value, changes } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ value }
          onChange={ changes }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreInput.propTypes = {
  value: PropTypes.string,
  changes: PropTypes.func,
}.isRequired;

export default GenreInput;

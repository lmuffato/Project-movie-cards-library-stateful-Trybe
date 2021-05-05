import React from 'react';
import PropTypes from 'prop-types';

class GenreInput extends React.Component {
  render() {
    const { value, callback } = this.props;
    return (
      <label htmlFor="label-genre" data-testid="genre-input-label">
        Gênero
        <select
          id="label-genre"
          value={ value }
          name="genre"
          data-testid="genre-input"
          onChange={ callback }
          className="form-control"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreInput.propTypes = PropTypes.shape({
  value: PropTypes.string || PropTypes.number,
  callback: PropTypes.func,
}).isRequired;

export default GenreInput;

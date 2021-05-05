import React from 'react';
import PropTypes from 'prop-types';

class GenreInput extends React.Component {
  render() {
    const { initialStateValue, stateHandler } = this.props;

    return (
      <label data-testid="genre-input-label" htmlFor="genre-input-label">
        Gênero
        <select
          value={ initialStateValue }
          data-testid="genre-input"
          onChange={ stateHandler }
          name="genre"
          id="genre-input-label"
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
  initialStateValue: PropTypes.string.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default GenreInput;

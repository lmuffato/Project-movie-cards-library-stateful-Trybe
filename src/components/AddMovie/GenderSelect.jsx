import React from 'react';
import PropTypes from 'prop-types';

export default class GenderSelect extends React.Component {
  render() {
    const { genre, handleGenre } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre-select"
          id="genre-input"
          data-testid="genre-input"
          value={ genre }
          onChange={ handleGenre }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenderSelect.propTypes = {
  genre: PropTypes.string.isRequired,
  handleGenre: PropTypes.func.isRequired,
};

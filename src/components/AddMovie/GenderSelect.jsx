import React from 'react';
import PropTypes from 'prop-types';

export default class GenreSelect extends React.Component {
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
          className="form-select"
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

GenreSelect.propTypes = {
  genre: PropTypes.string.isRequired,
  handleGenre: PropTypes.func.isRequired,
};

// Referência:
// https://www.w3schools.com/tags/att_option_selected.asp

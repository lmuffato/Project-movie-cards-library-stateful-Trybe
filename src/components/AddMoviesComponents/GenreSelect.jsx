import React from 'react';
import PropTypes from 'prop-types';

class GenreSelect extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="genre-select" data-testid="genre-input-label">
        Gênero
        <select
          id="genre-select"
          data-testid="genre-input"
          name="genre"
          value={ value }
          onChange={ onChange }
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
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default GenreSelect;

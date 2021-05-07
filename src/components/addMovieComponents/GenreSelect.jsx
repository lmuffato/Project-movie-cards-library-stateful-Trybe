import React from 'react';
import PropTypes from 'prop-types';

class GenreSelect extends React.Component {
  render() {
    const { inputValue, handle } = this.props;
    return (
      <div>
        <label
          htmlFor="genre-input"
          data-testid="genre-input-label"
        >
          Gênero
          <select
            onChange={ handle }
            data-testid="genre-input"
            name="genre"
            value={ inputValue }
            id="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

GenreSelect.propTypes = {
  handle: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default GenreSelect;

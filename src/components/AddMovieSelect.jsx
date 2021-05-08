import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSelect extends React.Component {
  render() {
    const { genre, method } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="select-gen">
        Gênero
        <select
          data-testid="genre-input"
          id="select-gen"
          value={ genre }
          onChange={ method }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    )
  }
}

AddMovieSelect.propTypes = {
  genre: PropTypes.string.isRequired,
  method: PropTypes.func.isRequired,
};

export default AddMovieSelect;
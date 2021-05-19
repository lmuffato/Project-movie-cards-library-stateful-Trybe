import React from 'react';
import PropTypes from 'prop-types';

class GenreForm extends React.Component {
  render() {
    const { genre, handleState } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ handleState }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreForm.propTypes = {
  genre: PropTypes.string.isRequired,
  handleState: PropTypes.func.isRequired,
};

export default GenreForm;

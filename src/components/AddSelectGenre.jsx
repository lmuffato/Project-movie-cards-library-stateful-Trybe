import React from 'react';
import Proptypes from 'prop-types';

class AddSelectGenre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          onChange={ handleChange }
          value={ genre }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

AddSelectGenre.propTypes = {
  handleChange: Proptypes.func,
  genre: Proptypes.string,
}.isRequired;

export default AddSelectGenre;

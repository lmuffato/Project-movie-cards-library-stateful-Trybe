import React from 'react';
import PropTypes from 'prop-types';

class Genero extends React.Component {
  render() {
    const { genre, changeValue } = this.props;
    return (
      <label htmlFor="selectedGenre" data-testid="genre-input-label">
        Gênero
        <select
          value={ genre }
          onChange={ changeValue }
          data-testid="genre-input"
          name="genre"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genero.propTypes = {
  genre: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default Genero;

import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFields extends React.Component {
  render() {
    const { storyline, atualizaEstado, rating, genre } = this.props;
    return (
      <section>
        <label htmlFor="textarea-in" data-testid="storyline-input-label">
          Sinopse
          <input
            id="textarea-in"
            data-testid="storyline-input"
            onChange={ atualizaEstado }
            value={ storyline }
            name="storyline"
          />
        </label>
        <label htmlFor="number-in" data-testid="rating-input-label">
          Avaliação
          <input
            id="number-in"
            data-testid="rating-input"
            value={ rating }
            onChange={ atualizaEstado }
            type="number"
            name="rating"
          />
        </label>
        <label htmlFor="select-in" data-testid="genre-input-label">
          Gênero
          <select
            id="select-in"
            data-testid="genre-input"
            value={ genre }
            onChange={ atualizaEstado }
            name="genre"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </section>
    );
  }
}

AddMovieFields.propTypes = {
  storyline: PropTypes.string.isRequired,
  atualizaEstado: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default AddMovieFields;

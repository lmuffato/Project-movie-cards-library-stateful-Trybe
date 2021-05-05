import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie2 extends Component {
  render() {
    const { value, onChange } = this.props;
    const { storyline, rating, genre, imagePath } = value;

    return (
      <>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ onChange }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ onChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ onChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ onChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </>
    );
  }
}

AddMovie2.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default AddMovie2;

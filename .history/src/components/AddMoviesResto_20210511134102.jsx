import React from 'react';
import PropTypes from 'prop-types';

class AddMovieResto extends React.Component {
  render() {
    const { storyline, rating, genre, hendleChange } = this.props;
    return (
      <div>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            id="storyline"
            cols="40"
            rows="4"
            value={ storyline }
            onChange={ hendleChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating"
            data-testid="rating-input"
            value={ rating }
            onChange={ hendleChange }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Imagem
          <input
            type="text"
            id="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ hendleChange }
          />
        </label>
      </div>
    );
  }
}
AddMovieResto.propTypes = {
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  hendleChange: PropTypes.func.isRequired,
};
export default AddMovieResto;

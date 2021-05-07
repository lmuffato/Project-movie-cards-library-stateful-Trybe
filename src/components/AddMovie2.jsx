import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie2 extends Component {
  render() {
    const { value: { storyline, rating, genre }, onChange } = this.props;
    return (
      <>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ onChange }
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            onChange={ onChange }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ onChange }
            data-testid="genre-input"
          >
            <optgroup>
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </optgroup>
          </select>
        </label>
      </>
    );
  }
}

AddMovie2.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default AddMovie2;

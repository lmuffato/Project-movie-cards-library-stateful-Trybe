import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StLineRatingGender extends Component {
  render() {
    const { handles, values } = this.props;
    const { storyline, rating, genre } = values;
    const { ChangeSl, ChangeRating, ChangeGenre } = handles;
    return (
      <div>
        <label htmlFor="stline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="stline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ ChangeSl }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating"
            data-testid="rating-input"
            value={ rating }
            onChange={ ChangeRating }
          />
        </label>
        <label htmlFor="genero" data-testid="genre-input-label">
          Gênero
          <select
            id="genero"
            onChange={ ChangeGenre }
            data-testid="genre-input"
            value={ genre }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

StLineRatingGender.propTypes = {
  props: PropTypes.shape({
    handles: PropTypes.objectOf(PropTypes.func),
  }),
}.isRequired;

export default StLineRatingGender;

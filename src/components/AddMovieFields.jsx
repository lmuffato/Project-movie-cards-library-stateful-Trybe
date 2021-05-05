import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFields extends React.Component {
  render() {
    const { storyline, atualizaEstado, rating } = this.props;
    return (
      <section>
        <label htmlFor="textarea-in" data-testid="storyline-input-label">
          Sinopse
          <input
            id="textarea-in"
            data-testid="storyline-input"
            onChange={ atualizaEstado }
            value={ storyline }
            type="textarea"
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
          />
        </label>
      </section>
    );
  }
}

AddMovieFields.propTypes = {
  storyline: PropTypes.string.isRequired,
  atualizaEstado: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};

export default AddMovieFields;

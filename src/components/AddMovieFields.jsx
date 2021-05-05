import React from 'react';
import PropTypes from 'prop-types';

class AddMovieFields extends React.Component {
  render() {
    const { storyline, atualizaEstado } = this.props;
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
      </section>
    );
  }
}

AddMovieFields.propTypes = {
  storyline: PropTypes.string.isRequired,
  atualizaEstado: PropTypes.func.isRequired,
};

export default AddMovieFields;

import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Avaliação" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          value={ value }
          type="number"
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Avaliacao;

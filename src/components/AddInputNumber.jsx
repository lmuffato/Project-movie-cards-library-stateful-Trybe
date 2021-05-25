import React from 'react';
import Proptypes from 'prop-types';

class AddInputNumber extends React.Component {
  render() {
    const { handleChange, rating } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          onChange={ handleChange }
          value={ rating }
        />
      </label>
    );
  }
}

export default AddInputNumber;

AddInputNumber.propTypes = {
  handleChange: Proptypes.func,
  rating: Proptypes.number,
}.isRequired;

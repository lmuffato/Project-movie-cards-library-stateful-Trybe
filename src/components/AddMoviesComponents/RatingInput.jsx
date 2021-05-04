import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating-input"
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ value }
          onChange={ onChange }
        />
      </label>

    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default RatingInput;

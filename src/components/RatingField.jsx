import React from 'react';
import PropTypes from 'prop-types';

class RatingField extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          defaultValue={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingField.propTypes = PropTypes.shape({
  value: PropTypes.string,
  handleChange: PropTypes.func,
}).isRequired;

export default RatingField;

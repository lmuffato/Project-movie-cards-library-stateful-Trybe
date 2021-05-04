import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { changeValue, rating } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          onChange={ changeValue }
          type="number"
          value={ rating }
          data-testid="rating-input"
          name="rating"
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.number.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default RatingInput;

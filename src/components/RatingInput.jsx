import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label
        htmlFor="rating-input"
        data-testid="rating-input-label"
      >
        Avaliação:
        <input
          value={ rating }
          data-testid="rating-input"
          onChange={ onChange }
          type="number"
          name="rating"
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingInput;

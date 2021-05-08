import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            name="rating"
            data-testid="rating-input"
            id="rating-input"
            onChange={ handleChange }
            value={ rating }
          />
        </label>
      </div>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RatingInput;

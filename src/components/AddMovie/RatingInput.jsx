import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { initialStateValue, stateHandler } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ initialStateValue }
          data-testid="rating-input"
          onChange={ stateHandler }
          id="rating-input-label"
          name="rating"
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  initialStateValue: PropTypes.number.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default RatingInput;

import React from 'react';
import PropTypes from 'prop-types';

class RatingForm extends React.Component {
  render() {
    const { rating, handleState } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleState }
        />
      </label>
    );
  }
}

RatingForm.propTypes = {
  rating: PropTypes.number.isRequired,
  handleState: PropTypes.func.isRequired,
};

export default RatingForm;

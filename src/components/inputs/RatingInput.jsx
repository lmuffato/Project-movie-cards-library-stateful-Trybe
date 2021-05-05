import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { value, callback } = this.props;
    return (
      <label htmlFor="avaliacao" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          defaultValue={ 0 }
          value={ value }
          data-testid="rating-input"
          onChange={ callback }
          className="form-control"
          id="avaliacao"
          min="0"
          max="5"
        />
      </label>
    );
  }
}

RatingInput.propTypes = PropTypes.shape({
  value: PropTypes.string || PropTypes.number,
  callback: PropTypes.func,
}).isRequired;

export default RatingInput;

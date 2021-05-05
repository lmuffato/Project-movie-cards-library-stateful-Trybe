import React from 'react';
import Proptypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { rating, handleOnChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="number">
        Avaliação
        <input
          type="number"
          id="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleOnChange }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  rating: Proptypes.number.isRequired,
  handleOnChange: Proptypes.func.isRequired,
};

export default InputNumber;

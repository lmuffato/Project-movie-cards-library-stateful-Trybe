import React from 'react';
import Proptypes from 'prop-types';

export default class Rating extends React.Component {
  render() {
    const { rating, changeHandler } = this.props;
    return (
      <div>
        <label
          htmlFor="rating"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            type="number"
            id="rating"
            name="rating"
            data-testid="rating-input"
            value={ rating }
            onChange={ changeHandler }
          />
        </label>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: Proptypes.number.isRequired,
  changeHandler: Proptypes.string.isRequired,
};

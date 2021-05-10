import React from 'react';
import Proptypes from 'prop-types';

export default class Rating extends React.Component {
  render() {
    const { value, onChange } = this.props;
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
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Rating.propTypes = {
  value: Proptypes.number.isRequired,
  onChange: Proptypes.string.isRequired,
};

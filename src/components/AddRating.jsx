import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddRating extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          id="rating-input"
          value={ value }
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number,
};

AddRating.defaultProps = {
  value: 0,
};

export default AddRating;

import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="rating-input"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          id="rating-input"
          type="number"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Rating.defaultProps = {
  value: 0,
  onChange: '',
};

Rating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};
export default Rating;

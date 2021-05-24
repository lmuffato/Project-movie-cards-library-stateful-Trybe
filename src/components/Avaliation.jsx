import React from 'react';
import PropTypes from 'prop-types';

class Avaliation extends React.Component {
  render() {
    const { onChange, value, label } = this.props;
    return (
      <label htmlFor={ value } data-testid="rating-input-label">
        { label }
        <input
          data-testid="rating-input"
          value={ value }
          type="number"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Avaliation.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default Avaliation;

import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { onChange, value, label } = this.props;
    return (
      <label htmlFor={ value } data-testid="storyline-input-label">
        { label }
        <input
          data-testid="storyline-input"
          value={ value }
          type="text"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Storyline;

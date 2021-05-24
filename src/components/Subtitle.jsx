import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { onChange, value, label } = this.props;
    return (
      <label htmlFor={ value } data-testid="subtitle-input-label">
        { label }
        <input
          data-testid="subtitle-input"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Subtitle;

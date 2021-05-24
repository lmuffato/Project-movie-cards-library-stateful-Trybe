import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { onChange, value, label } = this.props;
    return (
      <label htmlFor={ value } data-testid="image-input-label">
        { label }
        <input
          data-testid="image-input"
          value={ value }
          type="text"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Image;

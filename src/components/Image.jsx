import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        {children}
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Image;

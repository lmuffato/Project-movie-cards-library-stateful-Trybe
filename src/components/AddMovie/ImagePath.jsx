import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="image-input"
          value={ value }
          data-testid="image-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default ImagePath;

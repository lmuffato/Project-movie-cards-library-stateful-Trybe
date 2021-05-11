import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { value, changes } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ value }
          data-testid="image-input"
          onChange={ changes }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  value: PropTypes.string,
  changes: PropTypes.func,
}.isRequired;

export default ImagePath;

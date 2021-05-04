import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { value, handleValue } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          id="imagePath"
          onChange={ handleValue }
          value={ value }
        />

      </label>
    );
  }
}

export default ImagePath;

ImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
};

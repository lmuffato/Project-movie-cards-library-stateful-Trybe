import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label data-testid="image-input-label" htmlFor="input-image">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ value }
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImagePath;

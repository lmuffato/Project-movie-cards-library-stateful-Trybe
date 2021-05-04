import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="imagePath-input" data-testid="image-input-label">
        Imagem
        <input
          id="imagePath-input"
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default ImagePath;

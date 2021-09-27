import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        <input
          type="text"
          value={ imagePath }
          name="imagePath"
          data-testid="image-input"
          onChange={ handleChange }
          className="text-input-addMovie"
          placeholder="URL da imagem do seu filme"
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

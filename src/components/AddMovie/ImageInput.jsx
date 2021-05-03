import React from 'react';
import PropTypes from 'prop-types';

export default class ImageInput extends React.Component {
  render() {
    const { imagePath, handleImage } = this.props;
    return (
      <label htmlFor="img" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="img"
          data-testid="image-input"
          value={ imagePath }
          onChange={ handleImage }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleImage: PropTypes.func.isRequired,
};

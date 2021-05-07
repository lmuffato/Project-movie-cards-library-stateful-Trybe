import React from 'react';
import PropTypes from 'prop-types';

class ImageStory extends React.Component {
  render() {
    const { imagePath, handleImg } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imageInput">
        Imagem
        <input
          onChange={ handleImg }
          id="imageInput"
          type="text"
          value={ imagePath }
          data-testid="image-input"
        />
      </label>
    );
  }
}

ImageStory.propTypes = {
  imagePath: PropTypes.string,
}.isRequired;

export default ImageStory;

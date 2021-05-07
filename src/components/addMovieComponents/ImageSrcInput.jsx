import React from 'react';
import PropTypes from 'prop-types';

class ImageSrcInput extends React.Component {
  render() {
    const { inputValue, handle } = this.props;
    return (
      <div>
        <label
          htmlFor="image-input"
          data-testid="image-input-label"
        >
          Imagem
          <input
            type="text"
            onChange={ handle }
            data-testid="image-input"
            name="imagePath"
            value={ inputValue }
            id="image-input"
          />
        </label>
      </div>
    );
  }
}

ImageSrcInput.propTypes = {
  handle: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default ImageSrcInput;

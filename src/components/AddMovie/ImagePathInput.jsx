import React from 'react';
import PropTypes from 'prop-types';

class ImagePathInput extends React.Component {
  render() {
    const { initialStateValue, stateHandler } = this.props;

    return (
      <label data-testid="image-input-label" htmlFor="image-input-label">
        Imagem
        <input
          value={ initialStateValue }
          data-testid="image-input"
          onChange={ stateHandler }
          name="imagePath"
          id="image-input-label"
        />
      </label>
    );
  }
}

ImagePathInput.propTypes = {
  initialStateValue: PropTypes.string.isRequired,
  stateHandler: PropTypes.func.isRequired,
};

export default ImagePathInput;

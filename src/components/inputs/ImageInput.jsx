import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const { value, callback } = this.props;
    return (
      <label htmlFor="imagem" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ value }
          data-testid="image-input"
          onChange={ callback }
          className="form-control"
          id="imagem"
        />
      </label>
    );
  }
}

ImageInput.propTypes = PropTypes.shape({
  value: PropTypes.string || PropTypes.number,
  callback: PropTypes.func,
}).isRequired;

export default ImageInput;

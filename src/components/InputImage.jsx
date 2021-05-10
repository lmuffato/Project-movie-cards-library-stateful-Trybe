import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="img" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            value={ value }
            onChange={ onChange }
            id="img"
            data-testid="image-input"
            type="text"
          />
        </label>
        <br />
      </div>
    );
  }
}

InputImage.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default InputImage;

// fonte: https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name

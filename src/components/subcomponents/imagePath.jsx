import React from 'react';
import PropTypes from 'prop-types';

export default class ImagePath extends React.Component {
  render() {
    const { name, onChange } = this.props;
    return (
      <div>
        <label
          htmlFor="imagePath"
          data-testid="image-input-label"
        >
          Imagem
          <input
            type="text"
            id="imagePath"
            name="imagePath"
            value={ name }
            data-testid="image-input"
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

ImagePath.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};

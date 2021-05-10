import React from 'react';
import PropTypes from 'prop-types';

export default class ImagePath extends React.Component {
  render() {
    const { imagePath, changeHandler } = this.props;
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
            value={ imagePath }
            data-testid="image-input"
            onChange={ changeHandler }
          />
        </label>
      </div>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  changeHandler: PropTypes.string.isRequired,
};

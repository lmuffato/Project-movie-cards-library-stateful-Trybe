import React from 'react';
import Proptypes from 'prop-types';

export default class Image extends React.Component {
  render() {
    // const { image, changeHandler } = this.props;
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
            onChange={ this.changeHandler }
          />
        </label>
      </div>
    );
  }
}

Image.propTypes = {
  image: Proptypes.string,
  changeHandler: Proptypes.string,
}

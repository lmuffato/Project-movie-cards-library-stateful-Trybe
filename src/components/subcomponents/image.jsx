import React from 'react';

export default class Image extends React.Component {
  render() {
    const {image, changeHandler} = this.props;
    return (
      <div>
        <label
          htmlFor="imagePath"
          data-testid="image-input-label"
        >
          Imagem
        </label>
        <input
          type="text"
          id="imagePath"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.changeHandler }
        />
      </div>
    )
  }
}
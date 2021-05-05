import React from 'react';

class InputImage extends React.Component {
  render() {
    const { handleAddMovie, imagePath } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="Imagem">
        Imagem
        <input
          onChange={ handleAddMovie }
          data-testid="image-input"
          value={ imagePath }
          type="text"
          name="imagePath"
        />
      </label>
    );
  }
}
export default InputImage;

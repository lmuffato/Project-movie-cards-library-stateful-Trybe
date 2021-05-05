import React from 'react';

class InputImagem extends React.Component {
  render() {
    return (
      <div>
        <label
          data-testid="image-input-label"
          htmlFor="imagem-form"
        >
          Imagem
          <input
            id="imagem-form"
            data-testid="subtitle-input"
            type="text"
            // value={ imagePath }
            // onChange={ imagePath }
          />
        </label>
      </div>
    );
  }
}

export default InputImagem;

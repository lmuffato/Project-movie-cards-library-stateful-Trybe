import React from 'react';

class InputImage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      imagePath: '',
    };
  }

  handleChange({ target }) {
    this.setState({
      imagePath: target.value,
    });
  }

  render() {
    const { imagePath } = this.state;
    return (
      <div>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
      </div>

    );
  }
}

export default InputImage;

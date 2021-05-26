// implement AddMovie component here !!!estado!!!
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleStateChanges = this.handleStateChanges.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleStateChanges({ target }) {
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const{ title, subtitle, imagePath, storyline, rating } = this.state;
    return(
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.handleStateChanges }
          />
        </label>
        <label data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.handleStateChanges }
          />
        </label>
        <label data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input-label"
            type="text"
            value={ imagePath }
            onChange={ this.handleStateChanges }
          />
        </label>
        <label data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleStateChanges }
          />
        </label>
        <label data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            value={ rating }
            onChange={ this.handleStateChanges }
          />
        </label>

      </form>
    );
  }
}

export default AddMovie;

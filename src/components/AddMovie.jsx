import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleValue = this.handleValue.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleValue({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label
          data-testid="title-input-label"
          htmlFor="titulo"
        >
          Título
          <input
            name="title"
            onChange={ this.handleValue }
            data-testid="title-input"
            value={ title }
            id="titulo"
            type="text"
          />
        </label>
        <label
          data-testid="subtitle-input-label"
          htmlFor="subtitulo"
        >
          Subtítulo
          <input
            name="subtitle"
            onChange={ this.handleValue }
            data-testid="subtitle-input"
            value={ subtitle }
            id="subtitulo"
            type="text"
          />
        </label>
        <label
          data-testid="image-input-label"
          htmlFor="imagem"
        >
          Imagem
          <input
            name="imagePath"
            onChange={ this.handleValue }
            data-testid="image-input"
            value={ imagePath }
            id="imagem"
            type="text"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

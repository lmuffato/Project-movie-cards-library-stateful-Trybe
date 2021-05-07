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
    const { storyline, rating, genre } = this.state;
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
        <label
          data-testid="storyline-input-label"
          htmlFor="sinopse"
        >
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleValue }
            id="sinopse"
            cols="30"
            rows="10"
          />
        </label>
        <label
          data-testid="rating-input-label"
          htmlFor="avaliacao"
        >
          Avaliação
          <input
            name="rating"
            onChange={ this.handleValue }
            data-testid="rating-input"
            value={ rating }
            id="avaliacao"
            type="number"
          />
        </label>
        <label
          data-testid="genre-input-label"
          htmlFor="genero"
        >
          Gênero
          <select
            name="genre"
            id="genero"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleValue }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;

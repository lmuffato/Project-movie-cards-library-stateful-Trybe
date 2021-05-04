/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';
import TextInput from './TextInput';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextInput
          labelTestId="title-input-label"
          label="Título"
          name="title"
          value={ title }
          testid="title-input"
          onChange={ this.handleChange }
        />

        <TextInput
          labelTestId="subtitle-input-label"
          label="Subtítulo"
          name="subtitle"
          value={ subtitle }
          testid="subtitle-input"
          onChange={ this.handleChange }
        />
        <TextInput
          labelTestId="image-input-label"
          label="Imagem"
          name="imagePath"
          value={ imagePath }
          testid="image-input"
          onChange={ this.handleChange }
        />

        <label htmlFor="storyLine" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyLine"
            value={ storyLine }
            cols="30"
            rows="10"
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>

        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;

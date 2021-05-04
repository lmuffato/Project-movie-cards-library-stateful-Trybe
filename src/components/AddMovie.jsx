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
          label="Título"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ this.handleChange }
        />

        <TextInput
          label="Subtítulo"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
        <TextInput
          label="Imagem"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
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
      </form>
    );
  }
}

export default AddMovie;

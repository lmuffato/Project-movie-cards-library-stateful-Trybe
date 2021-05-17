import React, { Component } from 'react';
import AddMovie2 from './AddMovie2';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleTitleChange = this.handleTitleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-name">
          Título
          <input
            name="title"
            id="title-name"
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="sub-name">
          Subtítulo
          <input
            name="subtitle"
            id="sub-name"
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="img-name">
          Imagem
          <input
            name="imagePath"
            id="img-name"
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
        <AddMovie2 value={ { genre, rating, storyline } } funct={ this.handleChange } />

      </form>
    );
  }
}

export default AddMovie;

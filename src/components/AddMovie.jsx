// implement AddMovie component here
import React from 'react';
import AddInputNumber from './AddInputNumber';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="movie=title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
            onChange={ this.handleChange }
            value={ title }
          />
        </label>
        <label htmlFor="movie=subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
            value={ subtitle }
          />
        </label>
        <label htmlFor="url=img" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            onChange={ this.handleChange }
            value={ imagePath }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            onChange={ this.handleChange }
            value={ storyline }
          />
        </label>
        <AddInputNumber handleChange={ this.handleChange } rating={ rating } />
      </form>
    );
  }
}

export default AddMovie;

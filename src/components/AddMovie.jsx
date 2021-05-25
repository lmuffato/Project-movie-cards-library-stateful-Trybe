import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
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
    const { value } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          <input
            name="title"
            type="text"
            data-testid="title-input"
            value={ value }
            onChange={ this.handleChange }
          />
          Título
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          <input
            name="subtitle"
            type="text"
            data-testid="subtitle-input"
            value={ value }
            onChange={ this.handleChange }
          />
          Subtítulo
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          <input
            name="image"
            type="text"
            data-testid="image-input"
            value={ value }
            onChange={ this.handleChange }
          />
          Imagem
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ value }
            onChange={ this.handleChange }
          />
          Sinopse
        </label>
        <select name="rating">rating</select>
        <select name="genre">genre</select>
      </form>
    );
  }
}

export default AddMovie;

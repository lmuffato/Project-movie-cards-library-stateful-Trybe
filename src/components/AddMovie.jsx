import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    // Source: https://medium.com/@justintulk/best-practices-for-resetting-an-es6-react-components-state-81c0c86df98d
    this.baseState = this.state;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleButton({ target }) {
      const { onClick } = this.props;
      onClick();
      this.setState(this.baseState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            name="rating"
            type="number"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select 
            data-testid="genre-input"
            name="genre" 
            value={ genre }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={this.handleButton.bind(this)}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;

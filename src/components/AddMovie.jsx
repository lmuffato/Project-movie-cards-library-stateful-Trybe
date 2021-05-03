import React from 'react';
import PropTypes from 'prop-types';

// requisito 6
const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  resetState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }
  // requisito 8

  titleInput(title) {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  // requisito 9

  subtitleInput(subtitle) {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  // requisito 10

  imageInput(imagePath) {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  // requisito 11

  storylineInput(storyline) {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  // requisito 12

  ratingInput(rating) {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  // requisito 13

  genreInput(genre) {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  // requisito 14

  sendButton() {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ this.resetState }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
    // requisito 7 - form data-testid="add-movie-form"
      <form data-testid="add-movie-form">
        { this.titleInput(title) }
        { this.subtitleInput(subtitle) }
        { this.imageInput(imagePath) }
        { this.storylineInput(storyline) }
        { this.ratingInput(rating) }
        { this.genreInput(genre) }
        { this.sendButton() }
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequire;

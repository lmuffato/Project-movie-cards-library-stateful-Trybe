import React from 'react';
import PropTypes from 'prop-types';

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
    this.handleTitle = this.handleTitle.bind(this);
    this.createTitleInput = this.createTitleInput.bind(this);
    this.createSubtitleInput = this.createSubtitleInput.bind(this);
    this.createImageInput = this.createImageInput.bind(this);
    this.createStorylineInput = this.createStorylineInput.bind(this);
    this.createRatingInput = this.createRatingInput.bind(this);
    this.createGenreInput = this.createGenreInput.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.createButton = this.createButton.bind(this);
  }

  handleTitle(event) {
    const { name, value } = event.target;
    this.setState = {
      [name]: value,
    };
  }

  createTitleInput(title) {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleTitle }
        />
      </label>
    );
  }

  createSubtitleInput(subtitle) {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.handleTitle }
        />
      </label>
    );
  }

  createImageInput(imagePath) {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.handleTitle }
        />
      </label>
    );
  }

  createStorylineInput(storyline) {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyline"
          type="textarea"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleTitle }
        />
      </label>
    );
  }

  createRatingInput(rating) {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleTitle }
        />
      </label>
    );
  }

  createGenreInput(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          type="select"
          value={ genre }
          data-testid="genre-input"
          checked={ genre }
          onChange={ this.handleTitle }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  addMovie(onClick) {
    onClick(this.state);
    this.setState(initialState);
  }

  createButton(onClick) {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ this.addMovie(onClick) }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.createTitleInput(title) }
        { this.createSubtitleInput(subtitle) }
        { this.createImageInput(imagePath) }
        { this.createStorylineInput(storyline) }
        { this.createRatingInput(rating) }
        { this.createGenreInput(genre) }
        { this.createButton(onClick) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

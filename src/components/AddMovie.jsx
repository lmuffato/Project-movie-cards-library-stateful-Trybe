import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  makeInput = (type, name, value, testId) => (
    <input
      type={ type }
      name={ name }
      value={ value }
      onChange={ this.handleValue }
      data-testid={ testId }
      id={ testId }
    />
  );

  createGenreSelect = (genre) => (
    <select
      name="genre"
      value={ genre }
      onChange={ this.handleValue }
      data-testid="genre-input"
      id="genre-input"
    >
      <option value="action" data-testid="genre-option">Ação</option>
      <option value="comedy" data-testid="genre-option">Comédia</option>
      <option value="thriller" data-testid="genre-option">Suspense</option>
    </select>
  );

  makeTextArea = (name) => (
    <textarea
      name="storyline"
      value={ name }
      onChange={ this.handleValue }
      data-testid="storyline-input"
      id="storyline-input"
    />
  );

  callbackAddMovie = () => {
    const { onClick } = this.props;
    onClick();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const {
      title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          { this.makeInput('text', 'title', title, 'title-input') }
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          { this.makeInput('text', 'subtitle', subtitle, 'subtitle-input') }
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          { this.makeInput('text', 'imagePath', imagePath, 'image-input') }
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          { this.makeTextArea(storyline) }
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          { this.makeInput('number', 'rating', rating, 'rating-input') }
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          { this.createGenreSelect(genre) }
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.callbackAddMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.string.isRequired,
};

export default AddMovie;

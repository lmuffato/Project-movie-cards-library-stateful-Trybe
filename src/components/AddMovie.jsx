// implement AddMovie component here !!!estado!!!
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleStateChanges = this.handleStateChanges.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleStateChanges({ target }) {
    const { name } = target;
    this.setState({ [name]: value });
  }

  title = ({ title } = this.state) => (
    <label htmlFor="title" data-testid="title-input-label">
      Título
      <input
        name="title"
        data-testid="title-input"
        type="text"
        value={ title }
        onChange={ this.handleStateChanges }
      />
    </label>
  );

  subtitle = ({ subtitle } = this.state) => (
    <label htmlFor="subtitle" data-testid="subtitle-input-label">
      Subtítulo
      <input
        name="subtitle"
        data-testid="subtitle-input"
        type="text"
        value={ subtitle }
        onChange={ this.handleStateChanges }
      />
    </label>
  );

  thumbnailPath = ({ imagePath } = this.state) => (
    <label htmlFor="img" data-testid="image-input-label">
      Imagem
      <input
        name="img"
        data-testid="image-input-label"
        type="text"
        value={ imagePath }
        onChange={ this.handleStateChanges }
      />
    </label>
  )

  sinopse = ({ storyline } = this.state) => (
    <label htmlFor="sinopse" data-testid="storyline-input-label">
      Sinopse
      <textarea
        name="sinopse"
        data-testid="storyline-input"
        value={ storyline }
        onChange={ this.handleStateChanges }
      />
    </label>
  );

  rating = ({ rating } = this.state) => (
    <label htmlFor="rating" data-testid="rating-input-label">
      Avaliação
      <input
        name="rating"
        data-testid="rating-input"
        type="number"
        value={ rating }
        onChange={ this.handleStateChanges }
      />
    </label>
  )

  genre = ({ genre } = this.state) => (
    <label htmlFor="genre" data-testid="genre-input-label">
      Gênero
      <select
        name="genre"
        data-testid="genre-input"
        value={ genre }
        onChange={ this.handleStateChanges }
      >
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    </label>
  )

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.title(title) }
        { this.subtitle(subtitle) }
        { this.thumbnailPath(imagePath) }
        { this.sinopse(storyline) }
        { this.rating(rating) }
        { this.genre(genre) }
        <button
          type="submit"
          data-testid="send-button"
          onClick={ onClick(this.state) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func }.isRequiered;

export default AddMovie;

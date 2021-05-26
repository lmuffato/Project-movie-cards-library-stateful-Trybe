import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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

  setMovie = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  title = (title) => (
    <label htmlFor="title" data-testid="title-input-label">
      Título
      <input
        type="text"
        name="title"
        data-testid="title-input"
        value={ title }
        onChange={ this.setMovie }
      />
    </label>
  );

  subtitle = (subtitle) => (
    <label htmlFor="subtitle" data-testid="subtitle-input-label">
      Subtítulo
      <input
        type="text"
        name="subtitle"
        data-testid="subtitle-input"
        value={ subtitle }
        onChange={ this.setMovie }
      />
    </label>
  );

  imagePath = (imagePath) => (
    <label htmlFor="imagePath" data-testid="image-input-label">
      Imagem
      <input
        type="text"
        name="imagePath"
        data-testid="image-input"
        value={ imagePath }
        onChange={ this.setMovie }
      />
    </label>
  );

  storyline = (storyline) => (
    <label htmlFor="storyline" data-testid="storyline-input-label">
      Sinopse
      <textarea
        name="storyline"
        value={ storyline }
        data-testid="storyline-input"
        onChange={ this.setMovie }
      />
    </label>
  );

  rating = (rating) => (
    <label htmlFor="rating" data-testid="rating-input-label">
      Avaliação
      <input
        name="rating"
        type="number"
        value={ rating }
        data-testid="rating-input"
        onChange={ this.setMovie }
      />
    </label>
  );

  genre = (genre) => (
    <label htmlFor="genre" data-testid="genre-input-label">
      Gênero
      <select
        name="genre"
        type="number"
        value={ genre }
        data-testid="genre-input"
        onChange={ this.setMovie }
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>

      </select>
    </label>);

    button = (onclick) => (
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => this.salvaFilme(onclick, this.state) }
      >
        Adicionar filme
      </button>
    )

    salvaFilme = (onClick, state) => {
      onClick(state);
      this.setState(() => ({
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      }));
    }

    render() {
      const { onClick } = this.props;
      const {
        subtitle,
        title,
        imagePath,
        storyline,
        rating,
        genre,
      } = this.state;

      return (
        <form data-testid="add-movie-form">
          { this.title(title) }
          { this.subtitle(subtitle) }
          { this.imagePath(imagePath) }
          { this.storyline(storyline) }
          { this.rating(rating) }
          { this.genre(genre) }
          { this.button(onClick, this.state)}
        </form>
      );
    }
}

AddMovie.propTypes = {
  onClick: PropTypes.function,
}.isRequired;

export default AddMovie;

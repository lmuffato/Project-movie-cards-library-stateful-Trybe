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
  constructor() {
    super();

    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onChange({ target }) {
    const { id, value } = target;
    if (id === 'rating') this.setState(({ [id]: Number(value) }));
    else this.setState({ [id]: value });
  }

  addMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { title, subtitle, imagePath,
      storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            id="title"
            type="text"
            data-testid="title-input"
            value={ title }
            onChange={ this.onChange }
          />
        </label>

        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            type="text"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ this.onChange }
          />
        </label>

        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            id="imagePath"
            type="text"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.onChange }
          />
        </label>

        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline"
            name="sinopse"
            cols="40"
            rows="2"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.onChange }
          />
        </label>

        <label htmlFor="number-input" data-testid="rating-input-label">
          Avaliação
          <input
            id="rating"
            type="number"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.onChange }
          />
        </label>

        <label htmlFor="select-input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.onChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>

        <button
          type="button"
          data-testid="send-button"
          onClick={ this.addMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

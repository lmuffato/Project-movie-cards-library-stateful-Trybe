// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
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
    this.state = INITIAL_STATE;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            type="text"
            name="title"
            id="title"
            value={ title }
            onChange={ this.handleChange }
            data-testid="title-input"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            value={ subtitle }
            onChange={ this.handleChange }
            data-testid="subtitle-input"
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="imagePath"
            value={ imagePath }
            onChange={ this.handleChange }
            data-testid="image-input"
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            name="storyline"
            id="storyline"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating"
            value={ rating }
            onChange={ this.handleChange }
            data-testid="rating-input"
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select data-testid="genre-input" name="genre" value={ genre } onChange={ this.handleChange } >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

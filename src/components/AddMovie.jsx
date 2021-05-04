import React from 'react';
import PropTypes from 'prop-types';

class addMovie extends React.Component {
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

  changeTitle = (event) => {
    const { target: { value } } = event;
    this.setState({
      title: value,
    });
  }

  changeSubtitle = (event) => {
    const { target: { value } } = event;
    this.setState({
      subtitle: value,
    });
  }

  changeImage = (event) => {
    const { target: { value } } = event;
    this.setState({
      imagePath: value,
    });
  }

  changeStoryline = (event) => {
    const { target: { value } } = event;
    this.setState({
      storyline: value,
    });
  }

  changeRating = (event) => {
    const { target: { value } } = event;
    this.setState({
      rating: value,
    });
  }

  changeGenre = (event) => {
    const { target: { value } } = event;
    this.setState({
      genre: value,
    });
  }

  addMovie = () => {
    const { onClick } = this.props;
    onClick(this.state);
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          <input
            id="title-input"
            type="text"
            value={ title }
            onChange={ this.changeTitle }
            data-testid="title-input"
          />
          Título
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          <input
            id="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.changeSubtitle }
            data-testid="subtitle-input"
          />
          Subtítulo
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          <input
            id="image-input"
            type="text"
            value={ imagePath }
            onChange={ this.changeImage }
            data-testid="image-input"
          />
          Imagem
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          <textarea
            id="storyline-input"
            value={ storyline }
            onChange={ this.changeStoryline }
            data-testid="storyline-input"
          />
          Sinopse
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          <input
            id="rating-input"
            type="number"
            value={ rating }
            onChange={ this.changeRating }
            data-testid="rating-input"
          />
          Avaliação
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          <select
            id="genre-input"
            value={ genre }
            onChange={ this.changeGenre }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
          Gênero
        </label>
        <button type="button" onClick={ this.addMovie } data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}

addMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default addMovie;

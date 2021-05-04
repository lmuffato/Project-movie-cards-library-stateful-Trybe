import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.buttonClick = this.buttonClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: '0',
      genre: 'action',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  createInputTitle(title, callBack) {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          type="text"
          name="title"
          title={ title }
          data-testid="title-input"
          onChange={ callBack }
        />
      </label>
    );
  }

  createInputSubtitle(subtitle, callBack) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ callBack }
        />
      </label>
    );
  }

  createInputImage(imagePath, callBack) {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ callBack }
        />
      </label>
    );
  }

  createInputTextArea(storyLine, callBack) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyLine">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ storyLine }
          name="storyLine"
          id="stryLine"
          cols="30"
          rows="5"
          onChange={ callBack }
        />
      </label>
    );
  }

  createInputRating(rating, callBack) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ rating }
          onChange={ callBack }
        />
      </label>
    );
  }

  createInputGenre(genre, callBack) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          id="genre"
          value={ genre }
          onChange={ callBack }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>

      </label>
    );
  }

  buttonClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: '0',
      genre: 'action',
    });
    document.getElementById('add-movie-form').reset();
  }

  render() {
    const { title, subtitle, imagePath, storyLine, genre, rating } = this.state;
    return (
      <form data-testid="add-movie-form" id="add-movie-form">
        {this.createInputTitle(title, this.handleChange)}
        {this.createInputSubtitle(subtitle, this.handleChange)}
        {this.createInputImage(imagePath, this.handleChange)}
        {this.createInputTextArea(storyLine, this.handleChange)}
        {this.createInputRating(rating, this.handleChange)}
        {this.createInputGenre(genre, this.handleChange)}
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.buttonClick }
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

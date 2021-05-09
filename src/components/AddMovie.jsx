import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Auxílio da construção da Lógica das funções de callback e por lembrar de forma SOFRIDA as tags corregas do forms de Guilherme Dornelles Turma 10

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.sendNewMovie = this.sendNewMovie.bind(this);
    this.handleStateInfo = this.handleStateInfo.bind(this);
  }

  handleStateInfo({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  sendNewMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  titleInputDisplay(title) {
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleStateInfo }
        />
      </label>);
  }

  subTitleInputDisplay(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.handleStateInfo }
        />
      </label>
    );
  }

  genreInputDisplay(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleStateInfo }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.titleInputDisplay(title)}
        {this.subTitleInputDisplay(subtitle)}
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            value={ imagePath }
            onChange={ this.handleStateInfo }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            type="textarea"
            name="storyLine"
            data-testid="storyline-input"
            value={ storyLine }
            onChange={ this.handleStateInfo }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            type="number"
            name="rating"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.handleStateInfo }
          />
        </label>
        {this.genreInputDisplay(genre)}
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.sendNewMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;

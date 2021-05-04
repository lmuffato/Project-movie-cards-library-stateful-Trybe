import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  titleRender() {
    const { title } = this.state;

    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  subtitleRender() {
    const { subtitle } = this.state;

    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  imageRender() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image" data-testid="image-input-label">
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

  storyRender() {
    const { storyLine } = this.state;

    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyLine"
          value={ storyLine }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  ratingRender() {
    const { rating } = this.state;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  genreRender() {
    const { genre } = this.state;

    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option"> Ação </option>
          <option value="comedy" data-testid="genre-option"> Comédia </option>
          <option value="thriller" data-testid="genre-option"> Suspense </option>
        </select>
      </label>
    );
  }

  bookmarkedFunc() {
    const { bookmarked } = this.state;

    return (
      <label htmlFor="bookmarked" data-testid="bookmarked-input-label">
        <input
          type="checkbox"
          value={ bookmarked }
          name="bookmarked"
          onChange={ this.handleChange }
          data-testid="bookmarked-input"
        />
      </label>
    );
  }

  buttonClick(event) {
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
      bookmarked: false,
    });
  }

  sendButton() {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ this.buttonClick }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <div>
          {this.titleRender()}
        </div>
        <div>
          {this.subtitleRender()}
        </div>
        <div>
          {this.imageRender()}
        </div>
        <div>
          {this.storyRender()}
        </div>
        <div>
          {this.ratingRender()}
        </div>
        <div>
          {this.genreRender()}
        </div>
        <div>
          {this.bookmarkedFunc()}
        </div>
        <div>
          {this.sendButton()}
        </div>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;

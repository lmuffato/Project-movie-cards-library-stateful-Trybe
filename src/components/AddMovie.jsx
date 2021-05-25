import React from 'react';
import PropTypes from 'prop-types';

const startState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = startState;
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick(startState);
    // this.setState(startState);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  titleInputComponent(title) {
    return (
      <label data-testid="title-input-label" htmlFor="inputTitle">
        Título
        <input
          defaultValue={ title }
          data-testid="title-input"
          type="text"
          name="title"
          id="inputTitle"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  subtitleInputComponent(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="inputSub">
        Subtítulo
        <input
          defaultValue={ subtitle }
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          id="inputSub"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  imagePathInputComponent(imagePath) {
    return (
      <label data-testid="image-input-label" htmlFor="inputImage">
        Imagem
        <input
          defaultValue={ imagePath }
          data-testid="image-input"
          type="text"
          name="imagePath"
          id="inputImage"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  storylineInputComponent(storyline) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <input
          defaultValue={ storyline }
          data-testid="storyline-input"
          type="text"
          name="storyline"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  ratingInputComponent(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="inputRating">
        Avaliação
        <input
          defaultValue={ rating }
          data-testid="rating-input"
          type="number"
          name="rating"
          id="inputRating"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  genreInputComponent(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="inputRating">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          defaultValue={ genre }
          onChange={ this.handleChange }
        >
          <option
            value="action"
            data-testid="genre-option"
          >
            Ação
          </option>
          <option
            value="comedy"
            data-testid="genre-option"
          >
            Comédia
          </option>
          <option
            value="thriller"
            data-testid="genre-option"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }

  buttonComponent() {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ this.handleClick }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          {this.titleInputComponent(title)}
          {this.subtitleInputComponent(subtitle)}
          {this.imagePathInputComponent(imagePath)}
          {this.storylineInputComponent(storyline)}
          {this.ratingInputComponent(rating)}
          {this.genreInputComponent(genre)}
        </form>
        {this.buttonComponent()}
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

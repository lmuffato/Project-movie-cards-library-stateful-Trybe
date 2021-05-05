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
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }));
  }

  spamTitle = (title) => (
    <label htmlFor="label1" data-testid="title-input-label">
      Título
      <input
        type="text"
        id="label1"
        name="title"
        data-testid="title-input"
        value={ title }
        onChange={ this.handleChange }
      />
    </label>
  )

  spamSubtitle = (subtitle) => (
    <label htmlFor="label2" data-testid="subtitle-input-label">
      Subtítulo
      <input
        type="text"
        id="label2"
        name="subtitle"
        data-testid="subtitle-input"
        value={ subtitle }
        onChange={ this.handleChange }
      />
    </label>
  )

  spamImagePath = (imagePath) => (
    <label htmlFor="label3" data-testid="image-input-label">
      Imagem
      <input
        type="text"
        id="label3"
        name="imagePath"
        data-testid="image-input"
        value={ imagePath }
        onChange={ this.handleChange }
      />
    </label>
  )

  spamStoryline = (storyline) => (
    <label htmlFor="label4" data-testid="storyline-input-label">
      Sinopse
      <textarea
        type="text"
        id="label4"
        name="storyline"
        data-testid="storyline-input"
        value={ storyline }
        onChange={ this.handleChange }
      />
    </label>
  )

  spamRating = (rating) => (
    <label htmlFor="label5" data-testid="rating-input-label">
      Avaliação
      <input
        type="number"
        id="label5"
        name="rating"
        data-testid="rating-input"
        value={ rating }
        onChange={ this.handleChange }
      />
    </label>
  )

  spamGenre = (genre) => (
    <label htmlFor="genre" data-testid="genre-input-label">
      Gênero
      <select
        id="genre"
        name="genre"
        data-testid="genre-input"
        value={ genre }
        onChange={ this.handleChange }
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    </label>
  )

  resetState = () => {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  spamButton = (onClick) => (
    <button
      type="submit"
      data-testid="send-button"
      onClick={ () => {
        onClick();
        this.resetState();
      } }
    >
      Adicionar filme
    </button>
  )

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.spamTitle(title)}
        {this.spamSubtitle(subtitle)}
        {this.spamImagePath(imagePath)}
        {this.spamStoryline(storyline)}
        {this.spamRating(rating)}
        {this.spamGenre(genre)}
        {this.spamButton(onClick)}
      </form>
    );
  }
}

export default AddMovie;

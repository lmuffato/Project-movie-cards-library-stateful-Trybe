import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputGeneric from './InputGeneric';

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

    this.setStateGeneric = this.setStateGeneric.bind(this);
    this.getInputGeneric = this.getInputGeneric.bind(this);
    this.getPropsTitle = this.getPropsTitle.bind(this);
    this.getPropsSubtitle = this.getPropsSubtitle.bind(this);
    this.getPropsImage = this.getPropsImage.bind(this);
    this.getPropsRating = this.getPropsRating.bind(this);
    this.addMovieAndReset = this.addMovieAndReset.bind(this);
  }

  setStateGeneric({ target: { name, value } }) {
    const nameInput = name === 'image' ? 'imagePath' : name;
    this.setState({
      [nameInput]: value,
    });
  }

  getInputGeneric(...[name, type, onChange, textLabel, value]) {
    return { name, type, onChange, textLabel, value };
  }

  getPropsTitle() {
    const { title } = this.state;
    return this.getInputGeneric(
      'title',
      'text',
      this.setStateGeneric,
      'Título',
      title,
    );
  }

  getPropsSubtitle() {
    const { subtitle } = this.state;
    return this.getInputGeneric(
      'subtitle',
      'text',
      this.setStateGeneric,
      'Subtítulo',
      subtitle,
    );
  }

  getPropsImage() {
    const { imagePath } = this.state;
    return this.getInputGeneric(
      'image',
      'text',
      this.setStateGeneric,
      'Imagem',
      imagePath,
    );
  }

  getPropsRating() {
    const { rating } = this.state;
    return this.getInputGeneric(
      'rating',
      'number',
      this.setStateGeneric,
      'Avaliação',
      rating,
    );
  }

  addMovieAndReset(ev) {
    ev.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    const initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.setState({
      ...initialState,
    });
  }

  render() {
    const { storyline, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputGeneric { ...this.getPropsTitle() } />
        <InputGeneric { ...this.getPropsSubtitle() } />
        <InputGeneric { ...this.getPropsImage() } />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            cols="30"
            rows="10"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.setStateGeneric }
          />
        </label>
        <InputGeneric { ...this.getPropsRating() } />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.setStateGeneric }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
          <button
            type="submit"
            data-testid="send-button"
            onClick={ this.addMovieAndReset }
          >
            Adicionar filme
          </button>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default AddMovie;
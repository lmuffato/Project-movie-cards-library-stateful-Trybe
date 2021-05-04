import React from 'react';
import PropTypes from 'prop-types';
import Titulo from './inputComponents/Titulo';
import Subtitulo from './inputComponents/Subtitulo';
import Sinopse from './inputComponents/Sinopse';
import Imagem from './inputComponents/Imagem';
import Genero from './inputComponents/Genero';
import Avaliacao from './inputComponents/Avaliacao';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: '',
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

  render() {
    const { title, subtitle, imagePath,
      storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Titulo
          value={ title }
          onChange={ this.onChange }
        />

        <Subtitulo
          value={ subtitle }
          onChange={ this.onChange }
        />

        <Imagem
          value={ imagePath }
          onChange={ this.onChange }
        />

        <Sinopse
          value={ storyline }
          onChange={ this.onChange }
        />

        <Avaliacao
          value={ rating }
          onChange={ this.onChange }
        />

        <Genero
          value={ genre }
          onChange={ this.onChange }
        />

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

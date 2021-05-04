import React from 'react';
import PropTypes from 'prop-types';
import Titulo from './inputComponents/Titulo';
import Subtitulo from './inputComponents/Subtitulo';
import Sinopse from './inputComponents/Sinopse';
import Imagem from './inputComponents/Imagem';
import Genero from './inputComponents/Genero';
import Avaliacao from './inputComponents/Avaliacao';

class AddMovie extends React.Component {
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
    this.onChange = this.onChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  addMovie() {
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
    const { onChange, addMovie } = this;
    const { title, subtitle, imagePath,
      storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <div>
          <Titulo value={ title } onChange={ onChange } />
          <Subtitulo value={ subtitle } onChange={ onChange } />
          <Imagem value={ imagePath } onChange={ onChange } />
          <Avaliacao value={ Number(rating) } onChange={ onChange } />
          <Genero value={ genre } onChange={ onChange } />
        </div>
        <Sinopse value={ storyline } onChange={ onChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ addMovie }
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

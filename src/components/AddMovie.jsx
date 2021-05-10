import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Titulo from './Titulo';
import Subtitulo from './Subtitulo';
import Imagem from './Imagem';
import Sinopse from './Sinopse';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleValue = this.handleValue.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleValue({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  callBack = () => {
    const { onClick } = this.props;
    const newMovie = (this.state);
    console.log(newMovie);
    onClick(newMovie);
    this.setState(() => ({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    const { storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Titulo handleValue={ this.handleValue } title={ title } />
        <Subtitulo handleValue={ this.handleValue } subtitle={ subtitle } />
        <Imagem handleValue={ this.handleValue } imagePath={ imagePath } />
        <Sinopse handleValue={ this.handleValue } storyline={ storyline } />
        <label
          data-testid="rating-input-label"
          htmlFor="avaliacao"
        >
          Avaliação
          <input
            name="rating"
            onChange={ this.handleValue }
            data-testid="rating-input"
            value={ rating }
            id="avaliacao"
            type="number"
          />
        </label>
        <label
          data-testid="genre-input-label"
          htmlFor="genero"
        >
          Gênero
          <select
            name="genre"
            id="genero"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleValue }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={ this.callBack } type="button">
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

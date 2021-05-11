import React from 'react';
import PropTypes from 'prop-types';
import Titulo from './Titulo';
import Subtitulo from './Subtitulo';
import Imagem from './Imagem';
import Sinopse from './Sinopse';
import Avaliacao from './Avaliacao';
import Genero from './Genero';

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
    this.titulo = this.titulo.bind(this);
    this.subtitulo = this.subtitulo.bind(this);
    this.imagem = this.imagem.bind(this);
    this.sinopse = this.sinopse.bind(this);
    this.avaliacao = this.avaliacao.bind(this);
    this.genero = this.genero.bind(this);
    this.botao = this.botao.bind(this);
  }

  titulo(evento) {
    this.setState({ title: evento.target.value });
  }

  subtitulo(evento) {
    this.setState({ subtitle: evento.target.value });
  }

  imagem(evento) {
    this.setState({ imagePath: evento.target.value });
  }

  sinopse(event) {
    this.setState({ storyline: event.target.value });
  }

  avaliacao(event) {
    this.setState({ rating: event.target.value });
  }

  genero(event) {
    this.setState({ genre: event.target.value });
  }

  botao() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
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
        <Titulo value={ title } onChange={ this.titulo } />
        <Subtitulo value={ subtitle } onChange={ this.subtitulo } />
        <Imagem value={ imagePath } onChange={ this.imagem } />
        <Sinopse value={ storyline } onChange={ this.sinopse } />
        <Avaliacao value={ Number(rating) } onChange={ this.avaliacao } />
        <Genero value={ genre } onChange={ this.genero } />
        <button type="button" data-testid="send-button" onClick={ this.botao }>
          Adicionar filme:
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

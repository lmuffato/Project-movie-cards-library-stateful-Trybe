import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Titulo from './subComponents/Titulo';
import Subtitulo from './subComponents/Subtitulo';
import Image from './subComponents/Image';
import Sinopse from './subComponents/Sinopse';
import Avaliacao from './subComponents/Avaliacao';
import Genero from './subComponents/Genero';
import Botao from './subComponents/Botao';

class AddMovie extends Component {
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
  }

  handleChange = ({ target }) => {
    const { value, id } = target;
    this.setState({
      [id]: value,
    });
  }

  handleClick = () => {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Titulo handleChange={ this.handleChange } value={ title } />
        <Subtitulo handleChange={ this.handleChange } value={ subtitle } />
        <Image handleChange={ this.handleChange } value={ imagePath } />
        <Sinopse handleChange={ this.handleChange } value={ storyline } />
        <Avaliacao handleChange={ this.handleChange } value={ rating } />
        <Genero handleChange={ this.handleChange } value={ genre } />
        <Botao handleClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

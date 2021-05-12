import React, { Component } from 'react';
import Titulo from './subComponents/Titulo';
import Subtitulo from './subComponents/Subtitulo';
import Image from './subComponents/Image';
import Sinopse from './subComponents/Sinopse';
import Avaliacao from './subComponents/Avaliacao';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { value, id } = target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Titulo handleChange={ this.handleChange } value={ title } />
        <Subtitulo handleChange={ this.handleChange } value={ subtitle } />
        <Image handleChange={ this.handleChange } value={ imagePath } />
        <Sinopse handleChange={ this.handleChange } value={ storyline } />
        <Avaliacao handleChange={ this.handleChange } value={ rating } />
      </form>
    );
  }
}

export default AddMovie;

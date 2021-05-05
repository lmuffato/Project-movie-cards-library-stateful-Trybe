// implement AddMovie component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Input from './Input';

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

  handle = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Input t="text" n="title" v={ title } o={ this.handle } s="Título" />
        <Input t="text" n="subtitle" v={ subtitle } o={ this.handle } s="Subtítulo" />
        <Input
          t="text"
          n="image"
          i="imagePath"
          v={ imagePath }
          o={ this.handle }
          s="Imagem"
        />
        <Input t="textarea" n="storyline" v={ storyline } o={ this.handle } s="Sinopse" />
        <Input t="number" n="rating" v={ rating } o={ this.handle } s="Avaliação" />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            onChange={ this.handle }
            value={ genre }
          >
            <option value="action" data-testid="genre-option" selected>Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;

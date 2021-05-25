import React from 'react';
import { string, element } from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.newState = this.newState.bind(this);

    this.state = {
      subtitle: '',
      title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };
  }

  newState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.newState }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.newState }
          />
        </label>
        <label htmlFor="img" data-testid="image-input-label">
          Imagem
          <input
            name="img"
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.newState }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="storyline"
            cols="30"
            rows="10"
            data-testid="storyline-input"
            onChange={ this.newState }
          >
            { storyline }
          </textarea>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: string,
  subtitle: string,
  imagePath: element,
  storyline: string,
}.isRequired;

export default AddMovie;

import React from 'react';
import { string, img } from 'prop-types';

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
    const { title, subtitle, imagePath } = this.state;
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
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: string,
  subtitle: string,
  imagePath: img,
}.isRequired;

export default AddMovie;

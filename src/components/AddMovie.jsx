// <AddMovie /> deve receber como prop:

// onClick, uma callback
import React from 'react';
import GeneroMovie from './GeneroMovie';
import AvaliacaoMovie from './AvaliacaoMovie';

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
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="subtitulo" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={ subtitle }
              onChange={ this.handleChange }
              data-testid="subtitle-input"
            />
          </label>
          <label htmlFor="título" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              value={ title }
              onChange={ this.handleChange }
              data-testid="title-input"
            />
          </label>
          <label htmlFor="imagem" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              name="imagePath"
              value={ imagePath }
              onChange={ this.handleChange }
              data-testid="image-input"
            />
          </label>
          <label htmlFor="sinopse" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              value={ storyline }
              onChange={ this.handleChange }
              data-testid="storyline-input"
            />
          </label>
          <AvaliacaoMovie avaliacao={ rating } handlechange={ this.handleChange } />
          <GeneroMovie genre={ genre } handlechange={ this.handleChange } />
        </form>
      </div>
    );
  }
}

export default AddMovie;

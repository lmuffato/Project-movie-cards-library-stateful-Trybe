// implement AddMovie component here
import React from 'react';
import AddMovieFields from './AddMovieFields';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
    //  rating: 0,
    //  genre: 'action',
    };
  }

  submeterForms = (event) => {
  //  this.setState({ subtitle: event.target.value });
    event.prevenDefault();
  }

  atualizaEstado = (event) => {
    this.setState({ title: event.target.value });
    this.setState({ subtitle: event.target.value });
    this.setState({ imagePath: event.target.value });
    this.setState({ storyline: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.submeterForms }>
        <label htmlFor="text-title" data-testid="title-input-label">
          Título
          <input
            id="text-title"
            value={ title }
            onChange={ this.atualizaEstado }
            data-testid="title-input"
            type="text"
          />
        </label>
        <label htmlFor="text-subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="text-subtitle"
            value={ subtitle }
            onChange={ this.atualizaEstado }
            data-testid="subtitle-input"
            type="text"
          />
        </label>
        <label htmlFor="text-image" data-testid="image-input-label">
          Imagem
          <input
            id="text-image"
            value={ imagePath }
            onChange={ this.atualizaEstado }
            data-testid="image-input"
            type="text"
          />
        </label>
        <AddMovieFields value={ storyline } onChange={ this.atualizaEstado } />
      </form>
    );
  }
}

export default AddMovie;

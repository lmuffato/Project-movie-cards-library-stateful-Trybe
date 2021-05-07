// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovieFields from './AddMovieFields';

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

  submeterForms = (event) => {
    event.preventDefault();
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

  atualizaEstado = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
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
            name="title"
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
            name="subtitle"
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
            name="imagePath"
          />
        </label>
        <AddMovieFields
          storyline={ storyline }
          rating={ rating }
          genre={ genre }
          atualizaEstado={ this.atualizaEstado }
        />
        <button type="submit" data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

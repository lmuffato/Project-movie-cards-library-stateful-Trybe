import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Genre from './Genre';
import Storyline from './Storyline';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.newState = this.newState.bind(this);
    this.addFilme = this.addFilme.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  newState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addFilme() {
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
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            name="imagePath"
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.newState }
          />
        </label>
        <Storyline newState={ this.newState } value={ storyline } />
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            value={ rating }
            name="rating"
            data-testid="rating-input"
            onChange={ this.newState }
          />
        </label>
        <Genre newState={ this.newState } value={ genre } />
        <Button addFilme={ this.addFilme } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;

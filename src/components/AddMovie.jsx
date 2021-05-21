import React from 'react';
import PropTypes from 'prop-types';
import RatingForm from './RatingForm';
import GenreForm from './GenreForm';
import ButtonAddMovie from './ButtonAddMovie';

class AddMovie extends React.Component {
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
    this.handleState = this.handleState.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleState({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  resetState() {
    const { onClick } = this.props;
    onClick();
    this.setState(
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleState }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleState }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleState }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleState }
          />
        </label>
        <RatingForm rating={ rating } handleState={ this.handleState } />
        <GenreForm genre={ genre } handleState={ this.handleState } />
        <ButtonAddMovie resetState={ this.resetState } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            id="input-label"
            name="title"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitleLabel">
          Subtítulo
          <input
            id="subtitleLabel"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imageInput">
          Imagem
          <input
            data-testid="image-input"
            id="imageInput"
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="storyline-text" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline-text"
            value={ storyline }
            name="storyline"
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

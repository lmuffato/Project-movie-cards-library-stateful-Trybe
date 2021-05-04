// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState(({ [name]: value }));
  };

  inputTitle = (title) => (
    <label htmlFor="campo1" data-testid="title-input-label">
      Título
      <input
        name="title"
        id="campo1"
        data-testid="title-input"
        type="text"
        value={ title }
        onChange={ this.handleChange }
      />
    </label>
  )

  inputSubtitle = (subtitle) => (
    <label htmlFor="campo2" data-testid="subtitle-input-label">
      Subtítulo
      <input
        name="subtitle"
        id="campo2"
        data-testid="subtitle-input"
        type="text"
        value={ subtitle }
        onChange={ this.handleChange }
      />
    </label>
  )

  inputImage = (imagePath) => (
    <label htmlFor="campo3" data-testid="image-input-label">
      Imagem
      <input
        name="imagePath"
        id="campo3"
        data-testid="image-input"
        type="text"
        value={ imagePath }
        onChange={ this.handleChange }
      />
    </label>
  );

  inputStory = (storyline) => (
    <label htmlFor="campo4" data-testid="storyline-input-label">
      Sinopse
      <textarea
        name="storyline"
        id="campo4"
        data-testid="storyline-input"
        type="text"
        value={ storyline }
        onChange={ this.handleChange }
      />
    </label>
  );

  inputRating = (rating) => (
    <label htmlFor="campo5" data-testid="rating-input-label">
      Avaliação
      <input
        name="rating"
        id="campo5"
        data-testid="rating-input"
        type="number"
        value={ rating }
        onChange={ this.handleChange }
      />
    </label>
  );
  // inputGenre = (genre) => ();

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          {this.inputTitle(title)}
          {this.inputSubtitle(subtitle)}
          {this.inputImage(imagePath)}
          {this.inputStory(storyline)}
          {this.inputRating(rating)}
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: null,
};

export default AddMovie;

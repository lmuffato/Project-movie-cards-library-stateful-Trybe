// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    const initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.state = initialState;
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

  inputGenre = (genre) => (
    <label htmlFor="campo6" data-testid="genre-input-label">
      Gênero
      <select
        name="genre"
        id="campo6"
        data-testid="genre-input"
        value={ genre }
        onChange={ this.handleChange }
      >
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    </label>
  );

  // resetCampus = () => (this.setState(
  //   this.state = {
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   }),
  // ))

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline,
      rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          {this.inputTitle(title)}
          {this.inputSubtitle(subtitle)}
          {this.inputImage(imagePath)}
          {this.inputStory(storyline)}
          {this.inputRating(rating)}
          {this.inputGenre(genre)}
          <button
            type="submit"
            data-testid="send-button"
            onClick={ onClick(() => this.state) }
          >
            Adicionar filme
          </button>
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

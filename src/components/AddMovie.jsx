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

  onClick = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  newMovie= () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    });
  }

  title = (title) => (
    <label data-testid="title-input-label" htmlFor="title-input">
      Título
      <input
        name="title"
        type="text"
        value={ title }
        data-testid="title-input"
        onChange={ this.onClick }
      />
    </label>
  );

  subtitle = (subtitle) => (
    <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
      Subtítulo
      <input
        name="subtitle"
        type="text"
        value={ subtitle }
        data-testid="subtitle-input"
        onChange={ this.onClick }
      />
    </label>
  );

  image = (imagePath) => (
    <label data-testid="image-input-label" htmlFor="image-input">
      Imagem
      <input
        name="imagePath"
        type="text"
        value={ imagePath }
        data-testid="image-input"
        onChange={ this.onClick }
      />
    </label>
  )

  storyline = (storyline) => (
    <label data-testid="storyline-input-label" htmlFor="storyline-input">
      Sinopse
      <textarea
        type="text"
        name="storyline"
        value={ storyline }
        data-testid="storyline-input"
        onChange={ this.onClick }
      />
    </label>
  )

  rating = (rating) => (
    <label data-testid="rating-input-label" htmlFor="rating-input">
      Avaliação
      <input
        name="rating"
        type="number"
        value={ rating }
        data-testid="rating-input"
        onChange={ this.onClick }
      />
    </label>
  )

  genre = (genre) => (
    <label data-testid="genre-input-label" htmlFor="genre-input">
      Gênero
      <select
        data-testid="genre-input"
        name="genre"
        id="genre"
        value={ genre }
        onChange={ this.onClick }
      >
        <option value="action" data-testid="genre-option"> Ação </option>
        <option value="comedy" data-testid="genre-option"> Comédia </option>
        <option value="thriller" data-testid="genre-option"> Suspense </option>
      </select>
    </label>
  );

  button = () => (
    <button
      type="button"
      data-testid="send-button"
      onClick={ this.newMovie }
    >
      Adicionar filme
    </button>
  )

  render() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.title(title)}
        {this.subtitle(subtitle)}
        {this.storyline(storyline)}
        {this.rating(rating)}
        {this.image(imagePath)}
        {this.genre(genre)}
        {this.button(this.onClick)}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;

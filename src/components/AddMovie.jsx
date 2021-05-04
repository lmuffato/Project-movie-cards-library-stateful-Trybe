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

  addtitle = () => {
    const { title } = this.state;
    return (
      <label htmlFor="titulo" data-testid="title-input-label">
        Título
        <br />
        <input
          type="text"
          id="titulo"
          data-testid="title-input"
          value={ title }
          onChange={ (event) => this.setState({ title: event.target.value }) }
        />
      </label>
    );
  }

  addSubtitle = () => {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subTitulo" data-testid="subtitle-input-label">
        Subtítulo
        <br />
        <input
          type="text"
          id="subTitulo"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ (event) => this.setState({ subtitle: event.target.value }) }
        />
      </label>
    );
  }

  addImage = () => {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <br />
        <input
          type="text"
          id="image"
          data-testid="image-input"
          value={ imagePath }
          onChange={ (event) => this.setState({ imagePath: event.target.value }) }
        />
      </label>
    );
  }

  addSinopse = () => {
    const { storyline } = this.state;
    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <br />
        <textarea
          className="sinopses"
          type="text"
          id="sinopse"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ (event) => this.setState({ storyline: event.target.value }) }
        />
      </label>
    );
  }

  addRating = () => {
    const { rating } = this.state;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <br />
        <input
          type="number"
          id="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ (event) => this.setState({ rating: event.target.value }) }
        />
      </label>
    );
  }

  addGenre = () => {
    const { genre } = this.state;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <br />
        <select
          id="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ (event) => this.setState({ genre: event.target.value }) }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  addNewMovie = () => {
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
    return (
      <form data-testid="add-movie-form" className="addMovieForm">
        {this.addtitle()}
        {this.addSubtitle()}
        {this.addImage()}
        {this.addSinopse()}
        {this.addRating()}
        {this.addGenre()}
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.addNewMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

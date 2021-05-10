import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.clearButton = this.clearButton.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action' };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  clearButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }
  // Criar função para não consumir tamanho do render
  // Ref. github.com/mateussays, PR Movie Cards Lib Statefull #9

  titleFunction() {
    const { title } = this.state;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  subtitleFuncion() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  imageFunction() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }

  textFunction() {
    const { storyLine } = this.state;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyLine"
          value={ storyLine }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  ratingFunction() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  genreFunction() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
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
  }

  render() {
    return (
      <form>
        <div>
          {this.titleFunction()}
          {this.subtitleFuncion()}
          {this.imageFunction()}
        </div>
        <div>
          {this.textFunction()}
          <div>
            {this.ratingFunction()}
            {this.genreFunction()}
          </div>
        </div>
        <button
          data-testid="send-button"
          onClick={ this.clearButton }
          type="button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = ({
  onClick: PropTypes.func,
}).isRequired;
export default AddMovie;

import React from 'react';
import PropTypes from 'prop-types';

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

    this.handleChange = this.handleChange.bind(this);
    this.handleStorylineChange = this.handleStorylineChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.makeInput = this.makeInput.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    if (name === 'image') {
      this.setState({
        imagePath: target.value,
      });
    } else {
      this.setState({
        [name]: target.value,
      });
    }
  }

  handleStorylineChange(event) {
    this.setState({
      storyline: event.target.value,
    });
  }

  handleGenreChange(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  handleSubmit = (event) => {
    const { onClick } = this.props;
    const newMovie = this.state;
    event.preventDefault();
    onClick(newMovie);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  makeInput = (name, value, type, onChange) => (
    <input
      name={ name }
      value={ value }
      type={ type }
      data-testid={ `${name}-input` }
      id={ `${name}-input` }
      onChange={ onChange }
    />
  );

  makeTextArea = (name, value, type, onChange) => (
    <textarea
      name={ name }
      value={ value }
      type={ type }
      data-testid={ `${name}-input` }
      id={ `${name}-input` }
      onChange={ onChange }
    />
  );

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          {this.makeInput('title', title, 'text', this.handleChange)}
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          {this.makeInput('subtitle', subtitle, 'text', this.handleChange)}
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          {this.makeInput('image', imagePath, 'text', this.handleChange)}
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          {this.makeTextArea('storyline', storyline, 'text', this.handleStorylineChange)}
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          {this.makeInput('rating', rating, 'number', this.handleChange)}
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            type="number"
            data-testid="genre-input"
            id="genre"
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleSubmit }
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

// Referências:
// https://stackoverflow.com/questions/52638426/eslint-must-use-destructuring-state-assignment
// https://www.w3schools.com/tags/tag_textarea.asp
// conteúdo do course
// Consulta ao repositório:
// https://github.com/tryber/sd-010-a-project-movie-cards-library-stateful/pull/45/commits/1dbc5d274ac124e7346bd6726f00bb46e9005dd0
// para entender como diminuir a quantidade de linhas dentro do render()
// Aprendizados do projeto em grupo do bloco 13 também

import React from 'react';

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

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubtitleChange = this.handleSubtitleChange.bind(this);
    this.handleImagePathChange = this.handleImagePathChange.bind(this);
    this.handleStorylineChange = this.handleStorylineChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.makeInput = this.makeInput.bind(this);
  }

  handleTitleChange(event) {
    console.log(event.target);
    this.setState({
      title: event.target.value,
    });
  }

  handleSubtitleChange(event) {
    this.setState({
      subtitle: event.target.value,
    });
  }

  handleImagePathChange(event) {
    this.setState({
      imagePath: event.target.value,
    });
  }

  handleStorylineChange(event) {
    console.log(event);
    this.setState({
      storyline: event.target.value,
    });
  }

  handleRatingChange(event) {
    this.setState({
      rating: event.target.value,
    });
  }

  handleGenreChange(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  makeInput = (value, type, id, onChange) => (
    <input
      value={ value }
      type={ type }
      data-testid={ id }
      id={ id }
      onChange={ onChange }
    />
  );

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          {this.makeInput(title, 'text', 'title-input', this.handleTitleChange)}
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          {this.makeInput(subtitle, 'text', 'subtitle-input', this.handleSubtitleChange)}
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          {this.makeInput(imagePath, 'text', 'image-input', this.handleImagePathChange)}
        </label>
        <label htmlFor="sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyline }
            type="text"
            data-testid="storyline-input"
            onChange={ this.handleStorylineChange }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          {this.makeInput(rating, 'number', 'rating-input', this.handleRatingChange)}
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            type="number"
            data-testid="genre-input"
            id="genre"
            onChange={ this.handleGenreChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;

// Referências:
// https://stackoverflow.com/questions/52638426/eslint-must-use-destructuring-state-assignment
// https://www.w3schools.com/tags/tag_textarea.asp
// conteúdo do course
// Consulta ao repositório:
// https://github.com/tryber/sd-010-a-project-movie-cards-library-stateful/pull/45/commits/1dbc5d274ac124e7346bd6726f00bb46e9005dd0
// para entender como diminuir a quantidade de linhas dentro do render()

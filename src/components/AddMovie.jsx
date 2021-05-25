import React from 'react';
import Title from './AddMovieLabels/Title';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ value } handleChange={ this.handleChange }/>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          <input
            name="subtitle"
            type="text"
            data-testid="subtitle-input"
            value={ value }
            onChange={ this.handleChange }
          />
          Subtítulo
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          <input
            name="image"
            type="text"
            data-testid="image-input"
            value={ value }
            onChange={ this.handleChange }
          />
          Imagem
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ value }
            onChange={ this.handleChange }
          />
          Sinopse
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          <input
            name="rating"
            data-testid="rating-input"
            type="number"
            value={ value }
            onChange={ this.handleChange }
          />
          Avaliação
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          <select
            name="genre"
            data-testid="genre-input"
            value={ value }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          Gênero
        </label>
      </form>
    );
  }
}

export default AddMovie;

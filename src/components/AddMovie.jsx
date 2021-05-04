import React from 'react';
import Button from './Button';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    const states = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.state = states;
  }

  handleChange({ target }) {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  resetState = () => {
    this.setState({ subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  makeInput = (id, type, name, value) => (
    <input
      id={ id }
      data-testid={ id }
      type={ type }
      name={ name }
      value={ value }
      onChange={ this.handleChange }
    />
  );

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    // const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          {this.makeInput('title-input', 'text', 'title', title)}
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          {this.makeInput('subtitle-input', 'text', 'subtitle', subtitle)}
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          {this.makeInput('image-input', 'text', 'imagePath', imagePath)}
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          {this.makeInput('storyline-input', 'textarea', 'storyline', storyline)}
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          {this.makeInput('rating-input', 'number', 'rating', rating)}
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            id="genre-input"
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <Button
          onClick={ () => { this.resetState(); } }
        />
      </form>
    );
  }
}

export default AddMovie;

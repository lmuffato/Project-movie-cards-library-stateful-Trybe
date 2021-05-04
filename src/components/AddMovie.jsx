import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
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
  };

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título:
            <input
              type="text"
              name="title"
              id="title-input"
              data-testid="title-input"
              value={ this.title }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo:
            <input
              type="text"
              name="subtitle"
              id="subtitle-input"
              data-testid="subtitle-input"
              value={ this.subtitle }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem:
            <input
              type="text"
              name="imagePath"
              id="image-input"
              data-testid="image-input"
              value={ this.imagePath }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              id="storyline-input"
              cols="30"
              rows="10"
              value={ this.storyline }
              data-testid="storyline-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              name="rating"
              id="rating-input"
              data-testid="rating-input"
              value={ this.state.rating }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <select name="genre" id="genre-input"
              value={ this.genre }
              onChange={ this.handleChange }
              data-testid="genre-input"
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;

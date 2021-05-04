import React from 'react';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: '',
};

class AddMovie extends React.Component {

  constructor() {
    super();

    this.state = initialState;
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    console.log(target);
    const { id, value } = target;
    if (id === 'rating') this.setState(({ [id]: Number(value) }));
    else this.setState({ [id]: value });
  }

  render() {
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              onChange={ this.onChange }
              type="text" id="title-input"
              data-testid="title-input" />
          </label>
          <label
            onChange={ this.onChange }
            htmlFor="subtitle-input"
            data-testid="subtitle-input-label">
            Subtítulo
            <input
              onChange={ this.onChange }
              type="text" id="subtitle-input"
              data-testid="subtitle-input" />
          </label>
          <label
            onChange={ this.onChange }
            htmlFor="image-input"
            data-testid="image-input-label">
            Imagem
            <input
              onChange={ this.onChange }
              id="image-input"
              type="text"
              data-testid="image-input" />
          </label>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              onChange={ this.onChange }
              id="storyline-input"
              name="storyline-input"
              data-testid="storyline-input"
            />
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input
              onChange={ this.onChange }
              type="number"
              id="rating"
              data-testid="rating-input" />
          </label>
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <select
              onChange={ this.onChange }
              name="genre-input" id="genre-input"
              data-testid="genre-input">
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;

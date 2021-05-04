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
  render() {
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input type="text" id="title-input" data-testid="title-input" />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input type="text" id="subtitle-input" data-testid="subtitle-input" />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input id="image-input" type="text" data-testid="image-input" />
          </label>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              id="storyline-input"
              name="storyline-input"
              data-testid="storyline-input"
            />
          </label>
          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            <input type="number" id="rating" data-testid="rating-input" />
          </label>
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <select name="genre-input" id="genre-input" data-testid="genre-input">
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

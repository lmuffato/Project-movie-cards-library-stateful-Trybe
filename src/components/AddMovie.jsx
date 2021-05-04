import React from 'react';

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
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <input
              id="rating-input"
              type="number"
              data-testid="rating-input"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;

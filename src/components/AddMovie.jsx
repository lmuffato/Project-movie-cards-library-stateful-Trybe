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
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">

          <label
            data-testid="title-input-label"
            htmlFor="titleMovie"
          >
            Título
            <input
              data-testid="title-input"
              id="titleMovie"
              type="text"
              value={ title }
            />
          </label>

          <label
            data-testid="subtitle-input-label"
            htmlFor="subtitleMovie"
          >
            Subtítulo
            <input
              data-testid="subtitle-input"
              id="subtitleMovie"
              value={ subtitle }
              type="text"
            />
          </label>

          <label
            data-testid="image-input-label"
            htmlFor="imageMovie"
          >
            Imagem
            <input
              data-testid="image-input"
              id="imageMovie"
              value={ imagePath }
              type="text"
            />

          </label>
        </form>
        <button type="button"> adicionar Filme </button>
      </div>
    );
  }
}

export default AddMovie;

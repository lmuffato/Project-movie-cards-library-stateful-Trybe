import React, { Component } from 'react';
import Title from './Title';

class AddMovie extends Component {
  constructor() {
    super();
    this.addTitle = this.addTitle.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  addTitle(event) {
    this.setState({ title: event.target.value });
  }
  /*   <label htmlFor="title-input" data-testid="title-input-label">
    Título
    <input
      type="text"
      value={ title }
      data-testid="title-input"
    />
  </label> */

  /*  <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
      Subtítulo
      <input
        type="text"
        value={ subtitle }
        data-testid="subtitle-input"
      />
    </label> */

  /*     <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ imagePath }
          data-testid="image-input"
        />
      </label> */

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        {/* {this.addImputText(title, 'title-imput', 'Título')} */}
        {/* {this.addImputText(subtitle, 'subtitle-imput', 'Subtítulo')} */}
        {/* {this.addImputText(imagePath, 'image-imput', 'Imagem')} */}
        {/* {this.funcAddTitle(title)} */}

        <Title value={ title } onChange={ this.addTitle } />

        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            value={ rating }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          <select value={ genre } data-testid="genre-input">
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

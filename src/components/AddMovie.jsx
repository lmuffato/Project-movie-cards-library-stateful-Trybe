import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.AddMovie = this.AddMovie.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  // Source: https://github.com/tryber/sd-010-a-project-movie-cards-library-stateful/tree/b6df1691507cba7f278c15b8dd06ccb0cf0281e6
  AddMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title-input"
            data-testid="title-input"
            value={ title }
            onChange={ (event) => this.setState({ title: event.target.value }) }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle-input"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ (event) => this.setState({ subtitle: event.target.value }) }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="image-input"
            value={ imagePath }
            data-testid="image-input"
            onChange={ (event) => this.setState({ imagePath: event.target.value }) }
          />
        </label>
        <label htmlFor="text-area" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="text-area"
            cols="30"
            rows="10"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ (event) => this.setState({ storyline: event.target.value }) }
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating-input"
            value={ rating }
            data-testid="rating-input"
            onChange={ (event) => this.setState({ rating: event.target.value }) }
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            value={ genre }
            id="genre-input"
            onChange={ (event) => this.setState({ genre: event.target.value }) }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" type="button" onClick={ this.AddMovie }>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;

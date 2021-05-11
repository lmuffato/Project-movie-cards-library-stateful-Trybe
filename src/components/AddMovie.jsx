import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  addtitle = () => {
    const { title } = this.state;
    return (
      <label htmlFor="titulo" data-testid="title-input-label">
        Título
        <input
          type="text"
          id="titulo"
          data-testid="title-input"
          value={ title }
          onChange={ (event) => this.setState({ title: event.target.value }) }
        />
      </label>
    );
  }

  addSubtitle = () => {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subTitulo" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subTitulo"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ (event) => this.setState({ subtitle: event.target.value }) }
        />
      </label>
    );
  }

  addImage = () => {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="image"
          data-testid="image-input"
          value={ imagePath }
          onChange={ (event) => this.setState({ imagePath: event.target.value }) }
        />
      </label>
    );
  }

  addSinopse = () => {
    const { storyline } = this.state;
    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          id="sinopse"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ (event) => this.setState({ storyline: event.target.value }) }
        />
      </label>
    );
  }

  addRating = () => {
    const { rating } = this.state;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ (event) => this.setState({ rating: event.target.value }) }
        />
      </label>
    );
  }

  addGenre = () => {
    const { genre } = this.state;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          id="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ (event) => this.setState({ genre: event.target.value }) }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.addtitle()}
        {this.addSubtitle()}
        {this.addImage()}
        {this.addSinopse()}
        {this.addRating()}
        {this.addGenre()}
      </form>
    );
  }
}

export default AddMovie;

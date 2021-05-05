// implement AddMovie component here
import React from 'react';
import Image from './Imagem';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
    };
  }

  handleText = (event) => {
    this.setState({ title: event.target.value });
    this.setState({ subtitle: event.target.value });
    this.setState({ imagePath: event.target.value });
    this.setState({ storyline: event.target.value });
    this.setState({ rating: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titleInput" data-testid="title-input-label">
          Título:
          <input
            id="titleInput"
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleText }
          />
        </label>
        <label htmlFor="subtitleInput" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            id="subtitleInput"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleText }
            data-testid="subtitle-input"
          />
        </label>
        <Image handleText={ this.handleText } imagePath={ imagePath } />
        <label htmlFor="storylineInput" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            id="storylineInput"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleText }
          />
        </label>
        <label htmlFor="ratingInput" data-testid="rating-input-label">
          Avaliação:
          <input
            type="number"
            name="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleText }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

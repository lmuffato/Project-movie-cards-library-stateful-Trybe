/* eslint-disable import/no-named-as-default */
// implement AddMovie component here
import React from 'react';
import Imagem from './Imagem';
import Subtitle from './Subtitle';
import Storyline from './Storyline';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

  handleText = (event) => {
    this.setState({ title: event.target.value });
    this.setState({ subtitle: event.target.value });
    this.setState({ imagePath: event.target.value });
    this.setState({ storyline: event.target.value });
    this.setState({ rating: event.target.value });
    this.setState({ genre: event.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
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
        <Subtitle subtitle={ subtitle } handleText={ this.handleText } />
        <Imagem handleText={ this.handleText } imagePath={ imagePath } />
        <Storyline handleText={ this.handleText } storyline={ storyline } />
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
        <label data-testid="genre-input-label" htmlFor="select">
          Gênero
          <select
            name="genre"
            value={ genre }
            id="select"
            data-testid="genre-input"
            onChange={ this.handleText }
          >
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

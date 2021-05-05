// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Imagem from './InnerComponents/Imagem';
import Subtitle from './InnerComponents/Subtitle';
import Storyline from './InnerComponents/Storyline';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleText = this.handleText.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleText(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleButton = (event) => {
    event.preventDefault();
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
        <button type="submit" onClick={ this.handleButton } data-testid="send-button">
          Adicionar filme!
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;

import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

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
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ rating: event.target.value });
    this.setState({ title: event.target.value });
  }

  addMovie() {
    const { onClick } = this.props;

    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { rating } = this.state;
    const { genre } = this.props;
    return (
      <div>
        <forms data-testid="add-movie-form">
          <Title />
          <label htmlFor="Adiciona Imagem" data-testid="image-input-label">
            Imagem
            <input
              id="Adiciona Imagem"
              data-testid="image-input"
            />
          </label>
        </forms>
        <label htmlFor="SelecionaGenero" data-testid="genre-input-label">
          Gênero
          <select
            id="SelecionaGenero"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            name="rating"
            type="number"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          id="Submit"
          type="button"
          data-testid="send-button"
          onClick={ this.addMovie }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
};

export default AddMovie;

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

  handleChange(event) {
    this.setState({ title: event.target.value });
    console.log(event.target.value);
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
          <label htmlFor="Adiciona Sinopse" data-testid="storyline-input-label">
            Sinopse
            <input
              id="Adiciona Sinopse"
              data-testid="storyline-input"
              type="text"
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
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};

export default AddMovie;

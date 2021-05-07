// implement AddMovie component here
import React, { Component } from 'react';
import AddMovieInputs from './AddMovieInputs';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };
  }

  addNewMovie = (evento) => { // Função pra adicionar o filme a salvar estado
    // console.log(evento);
    evento.preventDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    });
  };

  changeHandler = (evento) => {
    this.setState({ [evento.target.name]: evento.target.value });
    // console.log(evento);
    // console.log(this.state);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    // Os arrays abaixo tem representam os seguintes atributos: [ tagInput, type, id, name, label ]
    const Tit = ['input', 'text', 'title', 'title', 'Título'];
    const Sub = ['input', 'text', 'subtitle', 'subtitle', 'Subtítulo'];
    const Ima = ['input', 'text', 'image', 'imagePath', 'Imagem'];
    const Sto = ['textarea', 'storyline', 'storyline', 'storyline', 'Sinopse'];
    const Rat = ['input', 'number', 'rating', 'rating', 'Avaliação'];

    return (
      <form data-testid="add-movie-form">

        <AddMovieInputs inf={ Tit } value={ title } onChange={ this.changeHandler } />
        <AddMovieInputs inf={ Sub } value={ subtitle } onChange={ this.changeHandler } />
        <AddMovieInputs inf={ Ima } value={ imagePath } onChange={ this.changeHandler } />
        <AddMovieInputs inf={ Sto } value={ storyline } onChange={ this.changeHandler } />
        <AddMovieInputs inf={ Rat } value={ rating } onChange={ this.changeHandler } />

        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.changeHandler }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.addNewMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired, // Indica que a propriedade é essencial (se não for indicada, retorna erro)
// };

export default AddMovie;

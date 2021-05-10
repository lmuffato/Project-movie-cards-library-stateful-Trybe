// implement AddMovie component here
// .
import React from 'react';
import PropTypes from 'prop-types';
// Esse componente renderizará um formulário que permite adicionar na biblioteca
// um novo cartão de filme, dadas as seguintes informações do novo filme

// subtítulo
// título
// caminho da imagem
// sinopse
// avaliação
// gênero
// <AddMovie /> deve receber como prop:

// onClick, uma callback
// O componente <AddMovie /> possui como estado as seguintes propriedades:

// subtitle: guarda o subtítulo preenchido no formulário por quem usa a aplicação;
// title: guarda o título preenchido no formulário por quem usa a aplicação;
// imagePath: guarda o caminho da imagem preenchido no formulário por quem usa a aplicação;
// storyline: guarda a sinopse do filme escrita no formulário por quem usa a aplicação;
// rating: guarda a nota de avaliação dada no formulário por quem usa a aplicação;
// genre: guarda o gênero do filme selecionado no formulário por quem usa a aplicação.
// Ou seja, o estado de <AddMovie /> contém as informações do novo filme que foram
// inseridas por quem usa a aplicação. O estado inicial do componente <AddMovie /> deve ser:
// subtitle: '';
// title: '';
// imagePath: '';
// storyline: '';
// rating: 0;
// genre: 'action'.
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
    const { title, subtitle } = this.props;
    return (
      <div>
        <forms data-testid="add-movie-form">
          <label htmlFor="Adiciona Filme" data-testid="title-input-label">
            Título
            <input
              id="Adiciona Texto"
              data-testid="title-input"
              type="text"
              value={ title }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="Adiciona Subtitulo" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="Adiciona Subtitulo"
              data-testid="subtitle-input"
              type="text"
              value={ subtitle }
              onChange={ this.handleChange }
            />
          </label>
        </forms>
      </div>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default AddMovie;

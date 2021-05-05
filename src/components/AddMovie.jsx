// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import AddImage from './FormAddMovie/AddImage';
import AddRating from './FormAddMovie/AddRating';
import AddStoryline from './FormAddMovie/AddStoryline';
import AddSubtitle from './FormAddMovie/AddSubtitle';
import AddTitle from './FormAddMovie/AddTitle';
import AddGenre from './FormAddMovie/AddGenre';

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

  handleChange = ({ target: { value, name } }) => { // estou destruturando o evento, pegando apenas o event.target.value, e event.target.name
    console.log(this.state);
    this.setState({
      [name]: value, // dessa maneira, caada vez que alterar os inputs o nome da chame vai ser o nome que coloquei em cada input e o valor o valor alterado
    });
  }

  handleReset = (event) => {
    event.preventDefault(); // para impedir de carregar a tela novamente
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
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">

        <AddTitle value={ title } callback={ this.handleChange } />
        <AddSubtitle value={ subtitle } callback={ this.handleChange } />
        <AddImage value={ imagePath } callback={ this.handleChange } />
        <AddStoryline value={ storyline } callback={ this.handleChange } />
        <AddRating value={ rating } callback={ this.handleChange } />
        <AddGenre value={ genre } callback={ this.handleChange } />

        <button
          type="submit"
          data-testid="send-button"
          onClick={ (event) => {
            onClick(this.state); // envio o estado para MovieLibrary antes de resetar o estado
            this.handleReset(event); // chamo a função que reseta o estado
          } }
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequered;

export default AddMovie;

// tive ajuda do Murilo Gonçalves - Turma 10 - Tribo A  e o do instrutor Matheus Yuri Silva Domingos para entender o requisito 14 e também a função handleChange

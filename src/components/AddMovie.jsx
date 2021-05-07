import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './InputsTitle';
import InputSubtitle from './InputSubtitle';
import InputImagem from './InputImagem';
import InputSinopse from './InputSinopse';
import InputAvaliacao from './InputAvaliacao';
import InputGenero from './InputGenero';
import ButtonAddMovie from './ButtonAddMovie';

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
  // função abaixo  guarda o valor de alguns inputs
  // essa é uma função genérica que pega valor  e name do target da função
  // pega o valor de qualquer chave dentro do objeto do state, poreḿ
  // temos que ter definido o name em cada input correspondente.
  // conforme abaixo nos inputs.
  // essa função serve para texto mas em alguns inputs poderá ter que ser alterada
  // ou fazer outra função. ex: input de checked.

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }
  // função que captura o evento do botão para submeter
  // linha 31 o prevent defalt previne a página de recarregar como já do tipo
  // submit do botão.

  handleReset = () => {
    console.log(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  clicar= (event) => {
    event.preventDefault();
    this.handleReset();
    const { onClick } = this.props;
    onClick();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {/* linha 40, chamo a minha prop onClik que eu defini na const
        e aplico o valor da chave do state correspondente, adiciono o valor name
        com o mesmo nome da chave que está no state no qual a minha função pega
        dinamicamente e em seguida chamo a dita função que altera o estado. */}
        <InputTitle
          value={ title }
          name="title"
          handleChange={ this.handleChange }
        />
        <InputSubtitle
          value={ subtitle }
          name="subtitle"
          handleChange={ this.handleChange }
        />
        <InputImagem
          value={ imagePath }
          name="imagePath"
          handleChange={ this.handleChange }
        />
        <InputSinopse
          value={ storyline }
          name="storyline"
          handleChange={ this.handleChange }
        />
        <InputAvaliacao
          value={ rating }
          name="rating"
          handleChange={ this.handleChange }
        />
        <InputGenero
          value={ genre }
          name="genre"
          handleChange={ this.handleChange }
        />
        <ButtonAddMovie onClick={ this.clicar } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;

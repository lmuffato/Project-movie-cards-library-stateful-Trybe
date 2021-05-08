import React from 'react';
import Proptypes from 'prop-types';
import NewInput from './NewInput';
import NewTextarea from './NewTextarea';
import NewSelect from './NewSelect';

// As variáveis P e Pd contidas no método render, possuem a única finalidade de redução de caracteres.

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.submitButton = this.submitButton.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name === 'image' ? 'imagePath' : name]: value,
    });
  }

  submitButton() {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const pd = this.handleChange;
    const p = 'Gênero';

    return (
      <>
        <form data-testid="add-movie-form">
          <NewInput
            name="title"
            description="Título"
            type="text"
            handleChange={ this.handleChange }
            value={ title }
          />
          <NewInput
            name="subtitle"
            description="Subtítulo"
            type="text"
            handleChange={ this.handleChange }
            value={ subtitle }
          />
          <NewInput
            name="image"
            description="Imagem"
            type="text"
            handleChange={ this.handleChange }
            value={ imagePath }
          />
          <NewTextarea
            name="storyline"
            description="Sinopse"
            handleChange={ this.handleChange }
            value={ storyline }
          />
          <NewInput
            name="rating"
            description="Avaliação"
            type="number"
            handleChange={ this.handleChange }
            value={ rating }
          />
          <NewSelect name="genre" description={ p } handleChange={ pd } value={ genre } />
        </form>
        <button type="button" data-testid="send-button" onClick={ this.submitButton }>
          Adicionar filme
        </button>
      </>
    );
  }
}

AddMovie.propTypes = {
  onClick: Proptypes.func.isRequired,
};

export default AddMovie;

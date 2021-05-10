// Requisito 14 completado com ajuda do Adelino Junior
// que explicou a lógica do botão para validar o evento onClick

import React from 'react';
import Proptypes from 'prop-types';
import Title from './subcomponents/title';
import Subtitle from './subcomponents/subtitle';
import ImagePath from './subcomponents/imagePath';
import Storyline from './subcomponents/storyline';
import Rating from './subcomponents/rating';
import Genre from './subcomponents/genre';

export default class AddMovie extends React.Component {
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

  resetInputs = () => {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  addNewMovie = (ev) => {
    ev.preventDefault();
    const { onClick } = this.props;
    onClick();
    this.resetInputs();
  }

  changeHandler = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title
          name={ title }
          onChange={ this.changeHandler }
        />
        <Subtitle
          name={ subtitle }
          onChange={ this.changeHandler }
        />
        <ImagePath
          name={ imagePath }
          onChange={ this.changeHandler }
        />
        <Storyline
          name={ storyline }
          onChange={ this.changeHandler }
        />
        <Rating
          value={ rating }
          onChange={ this.changeHandler }
        />
        <Genre
          name={ genre }
          onChange={ this.changeHandler }
        />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.addNewMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: Proptypes.func.isRequired,
};

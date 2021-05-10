// Requisito 14 completado com ajuda do Adelino Junior
// que explicou a lógica do botão para validar o evento onClick

import React from 'react';
import Proptypes from 'prop-types';
import Title from './subcomponents/title';
import Subtitle from './subcomponents/subtitle';
import Image from './subcomponents/image';
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
    this.resetInputs();
    const { onClick } = this.props;
    onClick();
  }

  changeHandler = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title
          title={ title }
          handleChange={ this.handleChange }
        />
        <Subtitle
          subtitle={ subtitle }
          handleChange={ this.handleChange }
        />
        <Image
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <Storyline
          storyline={ storyline }
          handleChange={ this.handleChange }
        />
        <Rating
          rating={ rating }
          handleChange={ this.handleChange }
        />
        <Genre
          genre={ genre }
          handleChange={ this.handleChange }
        />
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

AddMovie.propTypes = {
  title: Proptypes.string,
  subtitle: Proptypes.string,
  imagePath: Proptypes.string,
  storyline: Proptypes.string,
  rating: Proptypes.number,
  genre: Proptypes.string,
  onClick: Proptypes.func,
};

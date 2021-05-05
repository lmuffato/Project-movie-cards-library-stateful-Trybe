import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Storyline from './Storyline';
import RatingComponent from './RatingComponent';
import Genre from './Genre';

class AddMovie extends Component {
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

    // Source: https://medium.com/@justintulk/best-practices-for-resetting-an-es6-react-components-state-81c0c86df98d
    this.baseState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.baseState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    // const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleChange }>
          Título
        </Title>
        <Subtitle value={ subtitle } onChange={ this.handleChange }>
          Subtítulo
        </Subtitle>
        <Image value={ imagePath } onChange={ this.handleChange }>
          Imagem
        </Image>
        <Storyline value={ storyline } onChange={ this.handleChange }>
          Sinopse
        </Storyline>
        <RatingComponent value={ rating } onChange={ this.handleChange }>
          Avaliação
        </RatingComponent>
        <Genre value={ genre } onChange={ this.handleChange }>
          Gênero
        </Genre>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleButton }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

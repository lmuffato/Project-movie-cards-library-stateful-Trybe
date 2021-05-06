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
    return (
      <form className="addMovie-form" data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleChange }>
          <span>Título:</span>
        </Title>
        <Subtitle value={ subtitle } onChange={ this.handleChange }>
          <span>Subtítulo:</span>
        </Subtitle>
        <Image value={ imagePath } onChange={ this.handleChange }>
          <span>Imagem:</span>
        </Image>
        <Storyline value={ storyline } onChange={ this.handleChange }>
          <span>Sinopse:</span>
        </Storyline>
        <RatingComponent value={ rating } onChange={ this.handleChange }>
          <span>Avaliação</span>
        </RatingComponent>
        <Genre value={ genre } onChange={ this.handleChange }>
          <span>Gênero:</span>
        </Genre>
        <button
          type="button"
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

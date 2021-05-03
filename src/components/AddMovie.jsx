import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from './AddMovie/Title';
import Subtitle from './AddMovie/Subtitle';
import ImagePath from './AddMovie/ImagePath';
import TextArea from './AddMovie/TextArea';
import Rating from './AddMovie/Rating';
import Genre from './AddMovie/Genre';

class AddMovie extends Component {
  constructor() {
    super();

    this.AddMovie = this.AddMovie.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  // Source: https://github.com/tryber/sd-010-a-project-movie-cards-library-stateful/tree/b6df1691507cba7f278c15b8dd06ccb0cf0281e6
  AddMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title
          value={ title }
          onChange={ (event) => this.setState({ title: event.target.value }) }
        />
        <Subtitle
          value={ subtitle }
          onChange={ (event) => this.setState({ subtitle: event.target.value }) }
        />
        <ImagePath
          value={ imagePath }
          onChange={ (event) => this.setState({ imagePath: event.target.value }) }
        />
        <TextArea
          value={ storyline }
          onChange={ (event) => this.setState({ storyline: event.target.value }) }
        />
        <Rating
          value={ rating }
          onChange={ (event) => this.setState({ rating: event.target.value }) }
        />
        <Genre
          value={ genre }
          onChange={ (event) => this.setState({ genre: event.target.value }) }
        />
        <button data-testid="send-button" type="button" onClick={ this.AddMovie }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;

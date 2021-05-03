import React, { Component } from 'react';

import Title from './forms/AddMovie/Title';
import Subtitle from './forms/AddMovie/Subtitle';
import ImagePath from './forms/AddMovie/ImagePath';
import Storyline from './forms/AddMovie/Storyline';
import Rating from './forms/AddMovie/Rating';
import Genre from './forms/AddMovie/Genre';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
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

        <Storyline
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
      </form>
    );
  }
}

import React, { Component } from 'react';

import Title from './forms/AddMovie/Title';
import Subtitle from './forms/AddMovie/Subtitle';
import ImagePath from './forms/AddMovie/ImagePath';
import Storyline from './forms/AddMovie/Storyline';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
    };
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
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
      </form>
    );
  }
}

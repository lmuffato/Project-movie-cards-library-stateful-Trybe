import React, { Component } from 'react';

import Title from './forms/AddMovie/Title';
import Subtitle from './forms/AddMovie/Subtitle';
import ImagePath from './forms/AddMovie/ImagePath';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
    };
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
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
      </form>
    );
  }
}

import React, { Component } from 'react';

import Title from './forms/AddMovie/Title';
import Subtitle from './forms/AddMovie/Subtitle';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
    };
  }

  render() {
    const { title, subtitle } = this.state;
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
      </form>
    );
  }
}

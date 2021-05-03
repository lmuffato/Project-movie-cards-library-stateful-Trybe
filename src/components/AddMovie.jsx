import React, { Component } from 'react';

import Title from './forms/AddMovie/Title';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title
          value={ title }
          onChange={ (event) => this.setState({ title: event.target.value }) }
        />
      </form>
    );
  }
}

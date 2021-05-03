import React, { Component } from 'react';

class AddMovie extends Component {
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
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title-input"
            data-testid="title-input"
            value={ title }
            onChange={ (event) => this.setState({ title: event.target.value }) }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

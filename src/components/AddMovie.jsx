// implement AddMovie component here !!!estado!!!
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleStateChanges(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    const{ title } = this.state;
    return(
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ this.handleStateChanges }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;

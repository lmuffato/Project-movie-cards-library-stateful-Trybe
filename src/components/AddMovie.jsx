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
    }
  }

  render() {
    return(
      <form data-testid="add-movie-form">

      </form>
    );
  }
}
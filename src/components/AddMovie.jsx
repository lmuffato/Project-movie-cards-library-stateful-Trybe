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

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <h1>
        { subtitle }
        { title }
        { imagePath }
        { storyline }
        { rating }
        { genre }
      </h1>
    );
  }
}

export default AddMovie;

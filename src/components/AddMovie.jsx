import React, { Component } from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleValue = this.handleValue.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleValue(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { handleValue } = this;
    return (
      <form action="" data-testid="add-movie-form">

        <Title value={ title } handleValue={ handleValue } />

        <Subtitle value={ subtitle } handleValue={ handleValue } />
        <ImagePath value={ imagePath } handleValue={ handleValue } />

        <h1>
          {storyline}
          {rating}
          {genre}
        </h1>

      </form>
    );
  }
}

export default AddMovie;

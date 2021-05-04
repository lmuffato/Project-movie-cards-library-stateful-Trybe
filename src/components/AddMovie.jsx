import React, { Component } from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import Rating from './Rating';
import Genre from './Genre';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">

        <Title value={ title } handleChange={ this.handleChange } />

        <Subtitle value={ subtitle } handleChange={ this.handleChange } />

        <ImagePath value={ imagePath } handleChange={ this.handleChange } />

        <Storyline value={ storyline } handleChange={ this.handleChange } />

        <Rating value={ rating } handleChange={ this.handleChange } />

        <Genre value={ genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;

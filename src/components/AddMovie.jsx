import React from 'react';
import Title from './AddMovieLabels/Title';
import Subtitle from './AddMovieLabels/Subtitle';
import Image from './AddMovieLabels/Image';
import Storyline from './AddMovieLabels/Storyline';
import Rating from './AddMovieLabels/Rating';
import Genre from './AddMovieLabels/Genre';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ value } handleChange={ this.handleChange } />
        <Subtitle value={ value } handleChange={ this.handleChange } />
        <Image value={ value } handleChange={ this.handleChange } />
        <Storyline value={ value } handleChange={ this.handleChange } />
        <Rating value={ value } handleChange={ this.handleChange } />
        <Genre value={ value } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;

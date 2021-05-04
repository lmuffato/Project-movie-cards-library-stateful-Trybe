import React from 'react';
import Title from './AddMoviesComponents/Title';
import Subtitle from './AddMoviesComponents/Subtitle';
import ImagePath from './AddMoviesComponents/ImagePath';
import Storyline from './AddMoviesComponents/Storyline';
import RatingInput from './AddMoviesComponents/RatingInput';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };
  }

  handleChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleChange } />
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <ImagePath value={ imagePath } onChange={ this.handleChange } />
        <Storyline value={ storyline } onChange={ this.handleChange } />
        <RatingInput value={ rating } onChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;

import React from 'react';
import Title from './addmoviecomponents/Title';
import Subtitle from './addmoviecomponents/Subtitle';
import ImagePath from './addmoviecomponents/ImagePath';
import Storyline from './addmoviecomponents/Storyline';
import AddMovieRating from './addmoviecomponents/AddMovieRating';
import Genre from './addmoviecomponents/Genre';

class AddMovie extends React.Component {
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

  handleInputChanges = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    // const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleInputChanges } />
        <Subtitle value={ subtitle } onChange={ this.handleInputChanges } />
        <ImagePath value={ imagePath } onChange={ this.handleInputChanges } />
        <Storyline value={ storyline } onChange={ this.handleInputChanges } />
        <AddMovieRating value={ rating } onChange={ this.handleInputChanges } />
        <Genre value={ genre } onChange={ this.handleInputChanges } />
      </form>
    );
  }
}

export default AddMovie;

// implement AddMovie component here
import React from 'react';
import TitleSubtitle from './addMovieInputs/TitleSubtitle';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.addMovie = this.addMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSub = this.handleSub.bind(this);
  }

  addMovie() {
    const { onClick } = this.props;

    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
    console.log(event.target.value);
  }

  handleSub(event) {
    this.setState({ subtitle: event.target.value });
  }

  render() {
    const { title, subtitle, imagepath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleSubtitle title={ title } handleChange={ this.handleChange }
         subtitle={ subtitle } handleSub={ this.handleSub } />
      </form>
    );
  }
}

export default AddMovie;

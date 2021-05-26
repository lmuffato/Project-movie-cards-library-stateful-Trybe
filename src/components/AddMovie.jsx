import React from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovieLabels/Title';
import Subtitle from './AddMovieLabels/Subtitle';
import Image from './AddMovieLabels/Image';
import Storyline from './AddMovieLabels/Storyline';
import Rating from './AddMovieLabels/Rating';
import Genre from './AddMovieLabels/Genre';
import Button from './AddMovieLabels/Button';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.resetDefaultState = this.resetDefaultState.bind(this);
  }

  handleChange({ target }) {
    console.log(target);
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetDefaultState(onClick, state) {
    onClick(state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } handleChange={ this.handleChange } />
        <Subtitle value={ subtitle } handleChange={ this.handleChange } />
        <Image value={ imagePath } handleChange={ this.handleChange } />
        <Storyline value={ storyLine } handleChange={ this.handleChange } />
        <Rating value={ rating } handleChange={ this.handleChange } />
        <Genre value={ genre } handleChange={ this.handleChange } />
        <Button
          onClick={ onClick }
          resetDefaultState={ this.resetDefaultState }
          state={ this.state }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

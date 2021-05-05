import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovieComponent/Title';
import Subtitle from './AddMovieComponent/Subtitle';
import ImagePath from './AddMovieComponent/ImagePath';
import RatingValue from './AddMovieComponent/RatingValue';
import Storyline from './AddMovieComponent/Storyline';
import SelectGenre from './AddMovieComponent/SelectGenre';
import AddMovieBtn from './AddMovieComponent/AddMovieBtn';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleValue = this.handleValue.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
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

  clickBtn(event) {
    event.preventDefault();
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

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { handleValue, clickBtn } = this;
    return (
      <form action="" data-testid="add-movie-form">

        <Title value={ title } handleValue={ handleValue } />
        <Subtitle value={ subtitle } handleValue={ handleValue } />
        <ImagePath value={ imagePath } handleValue={ handleValue } />
        <Storyline value={ storyline } handleValue={ handleValue } />
        <RatingValue value={ rating } handleValue={ handleValue } />
        <SelectGenre value={ genre } handleValue={ handleValue } />
        <AddMovieBtn onClick={ clickBtn } />
      </form>
    );
  }
}

export default AddMovie;

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

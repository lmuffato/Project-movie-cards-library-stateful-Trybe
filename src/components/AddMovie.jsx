import React from 'react';
import PropTypes from 'prop-types';
import Title from './forms/Title';
import Subtitle from './forms/Subtitle';
import Image from './forms/Image';
import Storyline from './forms/Storyline';
import Rating from './forms/Rating';
import Genre from './forms/Genre';
import Button from './forms/Button';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.resetInputs = this.resetInputs.bind(this);

    this.state = {
      title: '',
      subtitle: '',
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

  resetInputs(e) {
    e.preventDefault();
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <Image imagePath={ imagePath } handleChange={ this.handleChange } />
        <Storyline storyline={ storyline } handleChange={ this.handleChange } />
        <Rating rating={ rating } handleChange={ this.handleChange } />
        <Genre genre={ genre } handleChange={ this.handleChange } />
        <Button
          onClick={ (e) => {
            onClick(e);
            this.resetInputs(e);
          } }
        />
      </form>
);
}
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

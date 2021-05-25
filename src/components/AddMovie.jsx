import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Genre from './formAddMovie/Genre';
import ImagePath from './formAddMovie/ImagePath';
import Rating from './formAddMovie/Rating';
import Storyline from './formAddMovie/Storyline';
import Subtitle from './formAddMovie/Subtitle';
import Title from './formAddMovie/Title';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleReset() {
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

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
          <Title title={ title } handleChange={ this.handleChange } />
          <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />
          <ImagePath imagePath={ imagePath } handleChange={ this.handleChange } />
          <Storyline storyline={ storyline } handleChange={ this.handleChange } />
          <Rating rating={ rating } handleChange={ this.handleChange } />
          <Genre genre={ genre } handleChange={ this.handleChange } />
          <button
            type="submit"
            onClick={ this.handleReset }
            data-testid="send-button"
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

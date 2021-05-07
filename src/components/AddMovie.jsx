// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './Inputs/InputTitle';
import InputSubTitle from './Inputs/InputSubTitle';
import InputImage from './Inputs/InputImage';
import InputStoryline from './Inputs/InputStoryline';
import InputRating from './Inputs/InputRating';
import InputGenre from './Inputs/InputGenre';

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
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddMovie({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div className="add-movie">
        <form className="add-movie-form" data-testid="add-movie-form">
          <InputTitle
            handleAddMovie={ this.handleAddMovie }
            title={ title }
          />
          <InputSubTitle handleAddMovie={ this.handleAddMovie } subtitle={ subtitle } />
          <InputImage handleAddMovie={ this.handleAddMovie } imagePath={ imagePath } />
          <InputStoryline
            handleAddMovie={ this.handleAddMovie }
            storyline={ storyline }
          />
          <InputRating handleAddMovie={ this.handleAddMovie } rating={ rating } />
          <InputGenre handleAddMovie={ this.handleAddMovie } genre={ genre } />

          <button
            className="add-movie-button"
            data-testid="send-button"
            type="submit"
            onClick={ this.handleSubmit }
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

export default AddMovie;

import React from 'react';
import PropTypes from 'prop-types';
import Title from './movie/Title';
import SubTitle from './movie/Subtitle';
import Img from './movie/Img';
import Sinopse from './movie/Sinopse';
import Rating from './movie/Rating';
import Genre from './movie/Genre';

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

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  sendMovieAndResetState = async (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    await this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title } = this.state;
    const { subtitle } = this.state;
    const { imagePath } = this.state;
    const { storyline } = this.state;
    const { rating } = this.state;
    const { genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title
          initialStateValue={ title }
          stateHandler={ this.handleChange }
        />
        <SubTitle
          initialStateValue={ subtitle }
          stateHandler={ this.handleChange }
        />
        <Img
          initialStateValue={ imagePath }
          stateHandler={ this.handleChange }
        />
        <Sinopse
          initialStateValue={ storyline }
          stateHandler={ this.handleChange }
        />
        <Rating
          initialStateValue={ rating }
          stateHandler={ this.handleChange }
        />
        <Genre
          initialStateValue={ genre }
          stateHandler={ this.handleChange }
        />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.sendMovieAndResetState }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

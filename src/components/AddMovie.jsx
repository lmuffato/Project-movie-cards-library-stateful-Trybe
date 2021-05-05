// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie2 from './AddMovie2';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title">
            Título
            <input
              name="title"
              value={ title }
              data-testid="title-input"
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitle">
            Subtítulo
            <input
              name="subtitle"
              value={ subtitle }
              data-testid="subtitle-input"
              onChange={ this.handleChange }
            />
          </label>
          <AddMovie2
            value={ { imagePath, storyline, rating, genre } }
            onChange={ this.handleChange }
          />
        </form>
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

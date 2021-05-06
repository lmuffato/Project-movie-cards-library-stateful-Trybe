import React from 'react';
import PropTypes from 'prop-types';
import Inputs from './InputsText';
import Select from './Select';

export default class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      rating: 0,
      storyline: '',
      genre: 'action',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'rating') {
      this.setState({
        [name]: parseInt(value, 10) || 0,
      });
      return;
    }
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { onClick } = this.props;

    const initialState = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };

    onClick(this.state);

    Array.from(document.querySelector('#add-movie').children)
      .forEach((element) => {
        const { firstElementChild } = element;
        const { name } = element.firstElementChild || element;
        if (firstElementChild) {
          firstElementChild.value = initialState[name];
        }
        this.setState({
          [name]: initialState[name],
        });
      });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <>
        <form action="" id="add-movie" data-testid="add-movie-form">
          <Inputs
            title={ title }
            subtitle={ subtitle }
            imagePath={ imagePath }
            handleChange={ this.handleChange }
          />
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              id="storyline-input"
              data-testid="storyline-input"
              cols="30"
              rows="10"
              defaultValue={ storyline }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <input
              type="number"
              name="rating"
              id="rating-input"
              data-testid="rating-input"
              defaultValue={ rating }
              onChange={ this.handleChange }
            />
          </label>
          <Select genre={ genre } handleChange={ this.handleChange } />
        </form>
        <button
          form="add-movie"
          type="submit"
          id="send-button"
          data-testid="send-button"
          onClick={ this.handleSubmit }
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

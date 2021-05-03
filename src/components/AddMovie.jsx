import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { inputs, initialStateAddMovie } from '../libs/data';
import Label from './Label';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { props: { onClick } } = this;
    onClick(this.state);
    this.setState({
      ...initialStateAddMovie,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.props;
    const { state, handleChange } = this;
    const elementsAddMovie = Object.keys(inputs.AddMovie);

    return (
      <form data-testid="add-movie-form">
        {elementsAddMovie.map((element) => {
          const { label, input } = inputs.AddMovie[element];
          return (
            <Label
              key={ input.name }
              labelInfo={ label }
              inputMainInfo={ { onChange: handleChange, value: state[input.name] } }
              inputExtraInfo={ input }
            />
          );
        })}

        <button type="button" data-testid="send-button" onClick={ this.handleClick }>
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

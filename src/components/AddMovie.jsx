import React, { Component } from 'react';

import { inputs } from '../libs/data';
import Label from './Label';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

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
      </form>
    );
  }
}

export default AddMovie;

import React, { Component } from 'react';

import { inputs } from '../libs/data';
import Label from './Label';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.props;
    const { state, handleChange } = this;
    const { inputTitle, inputSubtitle, inputImage, inputNumber } = inputs.AddMovie;

    return (
      <form data-testid="add-movie-form">
        <Label
          labelInfo={ inputTitle.label }
          inputMainInfo={ { onChange: handleChange, value: state.title } }
          inputExtraInfo={ inputTitle.input }
        />

        <Label
          labelInfo={ inputSubtitle.label }
          inputMainInfo={ { onChange: handleChange, value: state.subtitle } }
          inputExtraInfo={ inputSubtitle.input }
        />

        <Label
          labelInfo={ inputImage.label }
          inputMainInfo={ { onChange: handleChange, value: state.imagePath } }
          inputExtraInfo={ inputImage.input }
        />

        {/* <Label
          labelInfo={ inputNumber.label }
          inputMainInfo={ { onChange: handleChange, value: state.rating } }
          inputExtraInfo={ inputImage.input }
        /> */}
      </form>
    );
  }
}

export default AddMovie;

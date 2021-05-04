import React, { Component } from 'react';

import TextInput from './AddMovieComponents/TextInput';
import TextInput2 from './AddMovieComponents/TextInput2';
import TextInput3 from './AddMovieComponents/TextInput3';
import TextArea from './AddMovieComponents/TextArea';
import NumberInput from './AddMovieComponents/NumberInput';
import SelectInput from './AddMovieComponents/SelectInput';

class AddMovie extends Component {
  constructor() {
    super();
    this.handInputs = this.handInputs.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handInputs(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TextInput handInputs={ this.handInputs } value={ title } />
          <TextInput2 handInputs={ this.handInputs } value={ subtitle } />
          <TextInput3 handInputs={ this.handInputs } value={ imagePath } />
          <TextArea handInputs={ this.handInputs } value={ storyline } />
          <NumberInput handInputs={ this.handInputs } value={ rating } />
          <SelectInput handInputs={ this.handInputs } value={ genre } />
        </form>
      </div>
    );
  }
}

export default AddMovie;

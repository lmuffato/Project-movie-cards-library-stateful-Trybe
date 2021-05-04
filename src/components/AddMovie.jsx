import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextInput from './AddMovieComponents/TextInput';
import TextInput2 from './AddMovieComponents/TextInput2';
import TextInput3 from './AddMovieComponents/TextInput3';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handInputs = this.handInputs.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handInputs(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TextInput handInputs={ this.handInputs } value={ title } />
          <TextInput2 handInputs={ this.handInputs } value={ subtitle } />
          <TextInput3 handInputs={ this.handInputs } value={ imagePath } />
        </form>
      </div>
    );
  }
}

export default AddMovie;

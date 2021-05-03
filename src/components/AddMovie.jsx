import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './AddMovieComponents/TextInput';
import TextInput2 from './AddMovieComponents/TextInput2';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handInputs = this.handInputs.bind(this);
  }

  handInputs(event) {
    const { value, name } = event.target;
    return (
      this.setState({
        [name]: value,
      })
    );
  }

  render() {
    const { title, subtitle } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TextInput handInputs={ this.handInputs } value={ title } />
          <TextInput2 handInputs={ this.handInputs } value={ subtitle } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  state: PropTypes.shape({
    subtitle: PropTypes.string,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.number,
    genre: PropTypes.string,
  }),
};

AddMovie.defaultProps = {
  state: {
    subtitle: '',
    title: '',
    imagePath: '',
    storyline: '',
    rating: 0,
    genre: 'action',
  },
};

export default AddMovie;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './AddMovieComponents/TextInput';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle(event) {
    const { value } = event.target;
    return (
      this.setState({
        title: value,
      })
    );
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TextInput changeTitle={ this.changeTitle } value={ title } />
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

import React from 'react';
import PropTypes from 'prop-types';

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

  render() {
    console.log(this.state);
    const { onclick } = this.props;
    console.log(onclick);
    return (
      <form data-testid="add-movie-form" />
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func,
}.isRequired;

export default AddMovie;

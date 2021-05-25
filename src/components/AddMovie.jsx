import React from 'react';
import { func } from 'prop-types';

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
    const { onClick } = this.props;
    return (
      <form action="" data-testid="add-movie-form">
        <p>teste</p>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: func,
}.isRequired;

export default AddMovie;

import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {  
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: '',
      genre: ''
    }
  }
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state
    return (
      <form data-testid="add-movie-form">
        

      </form>
    )
  }
}

export default AddMovie

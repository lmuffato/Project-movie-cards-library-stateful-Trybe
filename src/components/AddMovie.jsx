// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
    //  subtitle: '',
    //  title: '',
    //  imagePath: '',
    //  storyline: '',
    //  rating: 0,
    //  genre: 'action',
    };
  }

  submeterForms = (event) => {
  //  this.setState({ subtitle: event.target.value });
    event.prevenDefault();
  }

  render() {
    return (
      <form data-testid="add-movie-form" onSubmit={ this.submeterForms }> </form>
    );
  }
}

export default AddMovie;

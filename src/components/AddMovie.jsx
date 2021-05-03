// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <input type="text" name="" id=""/>
        </form>
      </div>
    );
  }
}

export default AddMovie;
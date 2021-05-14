import React, { Component } from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form data-testid="add-movie-form"></form>
    )
  }
}

export default AddMovie;

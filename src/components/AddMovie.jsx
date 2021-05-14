import React, { Component } from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">Título</label><br/>
        <input type="text" title="" data-testid="title-input"></input><br/>
      </form>
    )
  }
}

export default AddMovie;

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
        <label data-testid="subtitle-input-label">Subtítulo</label><br/>
        <input type="text" subtitle="" data-testid="subtitle-input"></input><br/>
        <label data-testid="image-input-label">Imagem</label><br/>
        <input type="text" imagePath="" data-testid="image-input"></input><br/>
      </form>
    )
  }
}

export default AddMovie;

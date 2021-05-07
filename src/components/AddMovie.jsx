import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="inputDoTitulo">
          <input />
        </label>
      </form>
    );
  }
}

export default AddMovie;

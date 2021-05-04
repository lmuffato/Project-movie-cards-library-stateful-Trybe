import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input type="text" id="title-input" data-testid="title-input" />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;

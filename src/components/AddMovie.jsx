import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          <input type="text" data-testid="title-input" />
        </form>
      </div>
    );
  }
}

export default AddMovie;

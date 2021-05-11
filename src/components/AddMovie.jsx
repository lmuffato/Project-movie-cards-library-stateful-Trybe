import React from 'react';
// implement AddMovie component here

class AddMovie extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   };
  // }
  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="text">
            <input type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;

import React from 'react';
// implement AddMovie component here

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }
  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <input type="text" />
          <button onClick={this.props.onClick}></button>
        </form>
      </div>
    );
  }
}

export default AddMovie;

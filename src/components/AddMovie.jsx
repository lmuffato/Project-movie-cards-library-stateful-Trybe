import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    // this.state = {
    //   subtitle: '',
    //   title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    // };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <input type="text" />
      </form>
    );
  }
}

export default AddMovie;

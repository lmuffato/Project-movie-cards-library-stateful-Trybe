import React from 'react';
import TitleInput from './TitleInput';

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

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title } = this.state;

    return (
      <form data-testid="add-movie-form">
        <TitleInput
          initialStateValue={ title }
          stateHandler={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;

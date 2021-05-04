import React from 'react';
import LabelInput from './LabelInput';

class AddMovie extends React.Component {
  constructor() {
    super();
    // this.trocaTitle = this.trocaTitle.bind(this);
    this.state = {
      title: '',
      // subtitle: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  trocaTitle = (event) => {
    const { value } = event.target;
    this.setState(() => ({
      title: value,
    }));
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <LabelInput
          value={ title }
          id="title-input"
          type="text"
          text="Título"
          func={ this.trocaTitle }
        />

      </form>
    );
  }
}

export default AddMovie;

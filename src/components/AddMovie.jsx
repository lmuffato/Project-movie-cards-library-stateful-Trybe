import React from 'react';
import TitleInput from './TitleInput';
import SubitleInput from './SubtitleInput';
import ImagePathInput from './ImagePathInput';
import StorylineInput from './StorylineInput';

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
    const { subtitle } = this.state;
    const { imagePath } = this.state;
    const { storyline } = this.state;

    return (
      <form data-testid="add-movie-form">
        <TitleInput
          initialStateValue={ title }
          stateHandler={ this.handleChange }
        />
        <SubitleInput
          initialStateValue={ subtitle }
          stateHandler={ this.handleChange }
        />
        <ImagePathInput
          initialStateValue={ imagePath }
          stateHandler={ this.handleChange }
        />
        <StorylineInput
          initialStateValue={ storyline }
          stateHandler={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;

// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import StoryLine from './StoryLine';
import RatingField from './RatingField';
import Genre from './Genre';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle } = this.state;
    const { imagePath, storyLine } = this.state;
    const { rating, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <Title value={ title } handleChange={ this.handleChange } />
          <Subtitle value={ subtitle } handleChange={ this.handleChange } />
          <Image value={ imagePath } handleChange={ this.handleChange } />
          <StoryLine value={ storyLine } handleChange={ this.handleChange } />
          <RatingField value={ rating } handleChange={ this.handleChange } />
          <Genre value={ genre } handleChange={ this.handleChange } />
          <button type="submit" data-testid="send-button">
            Adicionar filme
          </button>
        </form>
      </section>
    );
  }
}

// AddMovie.prototypes = {

// }

export default AddMovie;

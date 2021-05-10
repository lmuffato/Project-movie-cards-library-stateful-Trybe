import React from 'react';
import TitleMovie from './TitleMovie';
import SubtitleMovie from './SubtitleMovie';
import ImgMovie from './ImgMovie';
import StorylineMovie from './StorylineMovie';
import GenreMovie from './GenreMovie';
import RatingMovie from './RatingMovie';

export default class AddMovie extends React.Component {
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, genre, rating } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <TitleMovie item={ title } callback={ this.handleChange } />
          <SubtitleMovie item={ subtitle } callback={ this.handleChange } />
          <ImgMovie item={ imagePath } callback={ this.handleChange } />
          <StorylineMovie item={ storyline } callback={ this.handleChange } />
          <RatingMovie item={ rating } callback={ this.handleChange } />
          <GenreMovie item={ genre } callback={ this.handleChange } />

        </form>
      </section>
    );
  }
}

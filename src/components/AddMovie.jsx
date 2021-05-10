import React from 'react';
import PropTypes from 'prop-types';
import TitleMovie from './TitleMovie';
import SubtitleMovie from './SubtitleMovie';
import ImgMovie from './ImgMovie';
import StorylineMovie from './StorylineMovie';
import GenreMovie from './GenreMovie';
import RatingMovie from './RatingMovie';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMovie = this.handleMovie.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
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

          <button
            type="button"
            data-testid="send-button"
            onClick={ this.handleMovie }
          >
            Adicionar filme
          </button>

        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

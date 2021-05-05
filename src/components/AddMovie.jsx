// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleInput from './inputs/TitleInput';
import SubtitleInput from './inputs/SubtitleInput';
import ImageInput from './inputs/ImageInput';
import StorylineInput from './inputs/StorylineInput';
import RatingInput from './inputs/RatingInput';
import GenreInput from './inputs/GenreInput';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target: { name, value } }) {
    // console.log(ev.target.name);
    this.setState({
      [name]: value,
    });
  }

  buttonClick(ev) {
    // console.log('botao clicado');
    ev.preventDefault();
    // console.log(this.props.onClick)
    const { onClick } = this.props;
    // console.log(this.state);
    onClick(this.state); // onClick é criado dentro MovieLibrary

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.props;

    return (
      <form className="form-add-movie" data-testid="add-movie-form">
        <TitleInput value={ title } callback={ this.handleChange } />
        <SubtitleInput value={ subtitle } callback={ this.handleChange } />
        <ImageInput value={ imagePath } callback={ this.handleChange } />
        <StorylineInput value={ storyLine } callback={ this.handleChange } />
        <RatingInput value={ rating } callback={ this.handleChange } />
        <GenreInput value={ genre } callback={ this.handleChange } />
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.buttonClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = PropTypes.shape({
  onClick: PropTypes.func,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyLine: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
}).isRequerid;

export default AddMovie;

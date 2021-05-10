import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './addMovieComponents/TitleInput';
import SubtitleInput from './addMovieComponents/SubtitleInput';
import ImageSrcInput from './addMovieComponents/ImageSrcInput';
import TextAreaAddMovie from './addMovieComponents/TextAreaAddMovie';
import InputNumber from './addMovieComponents/InputNumber';
import GenreSelect from './addMovieComponents/GenreSelect';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleTextChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleInput inputValue={ title } handle={ this.handleTextChange } />
          <SubtitleInput inputValue={ subtitle } handle={ this.handleTextChange } />
          <ImageSrcInput inputValue={ imagePath } handle={ this.handleTextChange } />
          <TextAreaAddMovie tAreaValue={ storyline } handle={ this.handleTextChange } />
          <InputNumber inputValue={ rating } handle={ this.handleTextChange } />
          <GenreSelect inputValue={ genre } handle={ this.handleTextChange } />
          <button
            type="submit"
            onClick={ (e) => {
              onClick(this.state);
              this.handleClick(e);
            } }
            data-testid="send-button"
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

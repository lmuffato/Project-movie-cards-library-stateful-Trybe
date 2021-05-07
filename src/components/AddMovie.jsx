import React from 'react';
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
    console.log('Mudanca ocorrida');
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleInput inputValue={ title } handle={ this.handleTextChange } />
          <SubtitleInput inputValue={ subtitle } handle={ this.handleTextChange } />
          <ImageSrcInput inputValue={ imagePath } handle={ this.handleTextChange } />
          <TextAreaAddMovie inputValue={ storyline } handle={ this.handleTextChange } />
          <InputNumber inputValue={ rating } handle={ this.handleTextChange } />
          <GenreSelect inputValue={ genre } handle={ this.handleTextChange } />
        </form>
      </div>
    );
  }
}

export default AddMovie;

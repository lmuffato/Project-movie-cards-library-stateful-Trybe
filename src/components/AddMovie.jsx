import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ [event.target.name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState = ({
      title: '',
      subtitle: '',
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
      <div value={ onClick }>
        <form data-testid="add-movie-form" onSubmit={ this.handleSubmit }>
          <TitleInput title={ title } handleChange={ this.handleChange } />
          <SubtitleInput subtitle={ subtitle } handleChange={ this.handleChange } />
          <ImageInput imagePath={ imagePath } handleChange={ this.handleChange } />
          <StorylineInput storyline={ storyline } handleChange={ this.handleChange } />
          <RatingInput rating={ rating } handleChange={ this.handleChange } />
          <label htmlFor="select-genre" data-testid="genre-input-label">
            Gênero
            <select
              value={ genre }
              onChange={ this.handleChange }
              data-testid="genre-input"
              id="select-genre"
              name="genre"
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button
            type="submit"
            data-testid="send-button"
            onClick={ onClick }
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

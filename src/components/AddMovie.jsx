import React from 'react';
import PropTypes from 'prop-types';
import RatingInput from './RatingInput';
import StorylineInput from './StorylineInput';
import ImageInput from './ImageInput';
import SubtitleInput from './SubtitleInput';
import TitleInput from './TitleInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
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

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleInput
            value={ this.title }
            onChange={ this.handleChange }
          />
          <SubtitleInput
            value={ this.subtitle }
            onChange={ this.handleChange }
          />
          <ImageInput
            value={ this.imagePath }
            onChange={ this.handleChange }
          />
          <StorylineInput
            value={ this.storyline }
            onChange={ this.handleChange }
          />
          <RatingInput
            value={ this.rating }
            onChange={ this.handleChange }
          />
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <select
              name="genre"
              id="genre-input"
              value={ this.genre }
              onChange={ this.handleChange }
              data-testid="genre-input"
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;

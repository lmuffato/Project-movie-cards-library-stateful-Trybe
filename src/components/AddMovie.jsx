import React from 'react';
import InputImage from './InputImage';
import InputRating from './InputRating';
import InputStory from './InputStory';
import InputSubtitle from './InputSubtitle';
import InputTitle from './InputTitle';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    this.setState({
      title: target.value,
      subtitle: target.value,
      imagePath: target.value,
      storyline: target.value,
      rating: target.value,
      genre: target.value,
    });
  }

  // onChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <InputTitle value={ title } onChange={ this.handleChange } />
          <InputSubtitle value={ subtitle } onChange={ this.handleChange } />
          <InputImage value={ imagePath } onChange={ this.handleChange } />
          <InputStory value={ storyline } onChange={ this.handleChange } />
          <InputRating value={ rating } onChange={ this.handleChange } />
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <select
              data-testid="genre-input"
              value={ genre }
              onChange={ this.handleChange }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;

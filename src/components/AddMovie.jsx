import React from 'react';
import PropTypes from 'prop-types';
import InputImage from './InputImage';
import InputRating from './InputRating';
import InputStory from './InputStory';
import InputSubtitle from './InputSubtitle';
import InputTitle from './InputTitle';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(value, name) {
    this.setState({
      [name]: value,
    });
  }

  handleChangeSelect({ target }) {
    this.setState({
      genre: target.value,
    });
  }

  onClick() {
    console.log('entrou');
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
  }
  // onChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    // const { title, subtitle } = this.props;

    return (
      <div>
        <form data-testid="add-movie-form">
          <InputTitle onChangeAM={ this.handleChange } title={ title } />
          <InputSubtitle onChangeAM={ this.handleChange } subtitle={ subtitle } />
          <InputImage onChangeAM={ this.handleChange } imagePath={ imagePath } />
          <InputStory onChangeAM={ this.handleChange } storyline={ storyline } />
          <InputRating onChangeAM={ this.handleChange } rating={ rating } />
          <label htmlFor="genre-input" data-testid="genre-input-label">
            Gênero
            <select
              data-testid="genre-input"
              value={ genre }
              onChange={ this.handleChangeSelect }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button
            type="reset"
            data-testid="send-button"
            onClick={ this.onClick }
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

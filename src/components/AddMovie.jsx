import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput'

class AddMovie extends React.Component {
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
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <TitleInput 
          initialStateValue={this.state.title}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

AddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default AddMovie;

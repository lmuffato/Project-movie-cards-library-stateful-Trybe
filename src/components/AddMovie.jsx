import React from 'react';
import PropTypes from 'prop-types';

import TitleField from './AddMovie/TitleField';
import SubtitleField from './AddMovie/SubtitleField';
import ImageField from './AddMovie/ImageField';
import SinopseField from './AddMovie/SinopseField';
import RatingField from './AddMovie/RatingField';
import GenderField from './AddMovie/GenderField';
import Button from './AddMovie/Button';

import './styles/AddMovie.css';

class AddMovie extends React.Component {
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
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  addMovie(event) {
    event.preventDefault();
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

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div className="addMovie">
        <h2>Adicionar Filme</h2>
        <form data-testid="add-movie-form">
          <TitleField value={ title } callback={ this.handleChange } />
          <SubtitleField value={ subtitle } callback={ this.handleChange } />
          <ImageField value={ imagePath } callback={ this.handleChange } />
          <SinopseField value={ storyline } callback={ this.handleChange } />
          <RatingField value={ rating } callback={ this.handleChange } />
          <GenderField value={ genre } callback={ this.handleChange } />
          <Button
            callback={ this.addMovie }
          />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

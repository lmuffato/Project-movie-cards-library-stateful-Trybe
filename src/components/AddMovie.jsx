import React from 'react';
import PropTypes from 'prop-types';

import TitleField from './AddMovie/TitleField';
import SubtitleField from './AddMovie/SubtitleField';
import ImageField from './AddMovie/ImageField';
import SinopseField from './AddMovie/SinopseField';
import RatingField from './AddMovie/RatingField';
import GenderField from './AddMovie/GenderField';
import Button from './AddMovie/Button';

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
    this.resetState = this.resetState.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  resetState() {
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
          <TitleField value={ title } callback={ this.handleChange } />
          <SubtitleField value={ subtitle } callback={ this.handleChange } />
          <ImageField value={ imagePath } callback={ this.handleChange } />
          <SinopseField value={ storyline } callback={ this.handleChange } />
          <RatingField value={ rating } callback={ this.handleChange } />
          <GenderField value={ genre } callback={ this.handleChange } />
          <Button
            callback={ (event) => {
              event.preventDefault();
              onClick(this.state);
              this.resetState();
            } }
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

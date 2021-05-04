import React from 'react';
import PropTypes from 'prop-types';

import TitleField from './AddMovie/TitleField';
import SubtitleField from './AddMovie/SubtitleField';
import ImageField from './AddMovie/ImageField';
import SinopseField from './AddMovie/SinopseField';
import RatingField from './AddMovie/RatingField';

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
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleField value={ title } callback={ this.handleChange } />
          <SubtitleField value={ subtitle } callback={ this.handleChange } />
          <ImageField value={ imagePath } callback={ this.handleChange } />
          <SinopseField value={ storyline } callback={ this.handleChange } />
          <RatingField value={ rating } callback={ this.handleChange } />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

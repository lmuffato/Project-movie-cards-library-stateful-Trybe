// implement AddMovie component here
import React from 'react';
import propTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    // this.onClick = this.onClick.bind(this);

    this.state = {
      title: '',
    };

    // this.state = {
    //   subtitle: '',
    //   title: '',
    //   imagePath: '',
    //   storyLine: '',
    //   rating: 0,
    //   genre: 'action',
    // };
  }

  render() {
    const { onClick } = this.props;
    const { title } = this.state;
    // const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title-input"
            value={ title }
            data-testid="title-input"
            onChange={ onClick }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default AddMovie;

import React from 'react';
// import PropTypes from 'prop-types';

// implement AddMovie component here
class AddMovie extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: '',
  //     genre: '',
  //   };
  // }
  render() {
    // const { subtitle, title, imagePath, storyline, rating, genre } = this.props;
    return (
      <form data-testid="add-movie-form">
        <input type="text" />
      </form>
    );
  }
}

export default AddMovie;

// AddMovie.propTypes = {
//   subtitle: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   imagePath: PropTypes.string.isRequired,
//   storyline: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
//   genre: PropTypes.string.isRequired,
// };

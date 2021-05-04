import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import Button from './Button';
import TextInputs from './TextInputs';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handler = this.handler.bind(this);
    this.defaultState = this.defaultState.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handler({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  defaultState() {
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick, movieList } = this.props;
    return (
      <form data-testid="add-movie-form">
        <TextInputs
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          rating={ rating }
          handler={ this.handler }
        />
        <Select handler={ this.handler } genre={ genre } />
        <Button
          defaultState={ this.defaultState }
          onClick={ onClick }
          newMovie={ this.state }
          movieList={ movieList }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
  movieList: PropTypes.arrayOf(PropTypes.object),
};

AddMovie.defaultProps = {
  onClick: (event) => event.preventDefault(),
  movieList: [],
};

export default AddMovie;

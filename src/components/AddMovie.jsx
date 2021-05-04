// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState(({ [name]: value }));
  };

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="campo1" data-testid="title-input-label">
            Título
            <input
              name="title"
              id="campo1"
              data-testid="title-input"
              type="text"
              value={ title }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="campo2" data-testid="subtitle-input-label">
            Subtítulo
            <input
              name="subtitle"
              id="campo2"
              data-testid="subtitle-input"
              type="text"
              value={ subtitle }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: null,
};

export default AddMovie;

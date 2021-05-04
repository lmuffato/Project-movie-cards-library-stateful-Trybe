import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ [event.target.name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <div value={ onClick }>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              data-testid="title-input"
              id="title-input"
              onChange={ this.handleChange }
              value={ title }
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              data-testid="subtitle-input"
              id="subtitle-input"
              onChange={ this.handleChange }
              value={ subtitle }
            />
          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

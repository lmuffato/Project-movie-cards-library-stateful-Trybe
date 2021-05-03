import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title } = this.state;
    return (
      <div value={ onClick }>
        <form data-testid="add-movie-form">
          <label htmlFor="text-input" data-testid="title-input-label">
            Título
            <input
              type="text"
              data-testid="title-input"
              id="text-input"
              onChange={ this.handleChange }
              value={ title }
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

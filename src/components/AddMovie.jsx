import React, { Component } from 'react';
import PropTypes from 'prop-types';
import event from '@testing-library/user-event';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.changeStateValue = this.changeStateValue.bind(this);
  }

  changeStateValue(e, nameState) {
    this.setState({
      [nameState]: e.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title } = this.state;
    return (
      <form action="#" data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title"
            value={ title }
            onChange={ (e) => this.changeStateValue(e, 'title') }
            data-testid="title-input"
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

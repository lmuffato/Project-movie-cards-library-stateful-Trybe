import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputStoryline extends Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="sinopse">
        Sinopse:
        <textarea
          value={ storyline }
          name="storyline"
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}
InputStoryline.propTypes = {
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

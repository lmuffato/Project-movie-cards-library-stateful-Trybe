import React, { Component } from 'react';
import { string, func } from 'prop-types';

class AddMovieText extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="storyLine" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyLine"
          value={ value }
          cols="30"
          rows="10"
          onChange={ onChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

AddMovieText.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
};

export default AddMovieText;

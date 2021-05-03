import React, { Component } from 'react';

class StoryLine extends Component {
  render() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleInputs }
        />
      </label>
    );
  }
}

export default StoryLine;

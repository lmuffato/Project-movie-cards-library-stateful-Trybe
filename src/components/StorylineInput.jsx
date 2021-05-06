import React from 'react';

class StorylineInput extends React.Component {
  render() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          cols="30"
          rows="10"
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

export default StorylineInput;

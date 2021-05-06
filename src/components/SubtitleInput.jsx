import React from 'react';

class SubtitleInput extends React.Component {
  render() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo:
        <input
          type="text"
          name="subtitle"
          id="subtitle-input"
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

export default SubtitleInput;

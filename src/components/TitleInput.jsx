import React from 'react';

class TitleInput extends React.Component {
  render() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título:
        <input
          type="text"
          name="title"
          id="title-input"
          data-testid="title-input"
        />
      </label>
    );
  }
}

export default TitleInput;

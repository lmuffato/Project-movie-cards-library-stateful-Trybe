import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          data-testid="title-input"
          id="title-input"
          type="text"
          value={ title }
          onChange={ handleInputs }
        />
      </label>
    );
  }
}

export default Title;

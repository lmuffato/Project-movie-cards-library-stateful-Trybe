import React, { Component } from 'react';

class SubTitle extends Component {
  render() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          id="subtitle-input"
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ handleInputs }
        />
      </label>
    );
  }
}

export default SubTitle;

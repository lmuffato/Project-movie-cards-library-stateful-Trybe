import React, { Component } from 'react';

class Genre extends Component {
  render() {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          id="genre-input"
          data-testid="genre-input"
          value={ genre }
          onChange={ handleInputs }
        >
          <option data-testid="genre-option" value={ action }>Ação</option>
          <option data-testid="genre-option" value={ comedy }>Comédia</option>
          <option data-testid="genre-option" value={ thriller }>Suspense</option>
        </select>
      </label>
    );
  }
}

export default Genre;

import React from 'react';

class InputGenero extends React.Component {
  render() {
    return (
      <div>
        <label
          htmlFor="genre-input"
          data-testid="genre-input-label"
        >
          Gênero
          <select
            id="genre-input"
            data-testid="genre-input"
            // value={ genre }
            // onChange={ genre }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

export default InputGenero;

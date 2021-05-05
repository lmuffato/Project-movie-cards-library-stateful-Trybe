import React from 'react';

class InputGenre extends React.Component {
  render() {
    const { handleAddMovie, genre } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="Gênero">
        Gênero
        <select
          onChange={ handleAddMovie }
          data-testid="genre-input"
          value={ genre }
          name="genre"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}
export default InputGenre;

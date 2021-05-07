import React from 'react';

class InputSelectThree extends React.Component {
  render() {
    const {
      selectedGenre,
      onSelectedGenreChange,
      textLabel,
      datatestid,
      datatestidLabel,
      datatestidOption, } = this.props;

    return (
      <label htmlFor="search-input" data-testid={ datatestidLabel }>
        { textLabel }
        <select
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid={ datatestid }
        >
          <option value="action" data-testid={ datatestidOption }>Ação</option>
          <option value="comedy" data-testid={ datatestidOption }>Comédia</option>
          <option value="thriller" data-testid={ datatestidOption }>Suspense</option>
        </select>
      </label>
    );
  }
}

export default InputSelectThree;

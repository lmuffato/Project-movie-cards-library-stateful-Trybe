import React from 'react';

export default class SearchGenre extends React.Component {
  render() {
    const { onSelectedGenreChange, selectedGenre } = this.props;
    return (
      <div>
        <label htmlFor="inputselect" data-testid="select-input-label">
        Filtrar por gênero
          <select id="inputselect" data-testid="select-input" value={ selectedGenre } onChange={ onSelectedGenreChange }>
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

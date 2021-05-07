import React from 'react';

export default class SearchFavorite extends React.Component {
  render() {
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    return (
      <div>
        <label htmlFor="inputcheck" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input id="inputcheck" type="checkbox" onChange={ onBookmarkedChange } data-testid="checkbox-input" checked={ bookmarkedOnly } />
        </label>
      </div>
    );
  }
}

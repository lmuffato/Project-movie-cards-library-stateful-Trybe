import React from 'react';

export default class SearchFavorite extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="inputcheck">Mostrar somente favoritos</label>
        <input id="inputcheck" type="checkbox">
        </input>
      </div>
    )
  }
}
import React from 'react';

export default class SearchFavorite extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="inputcheck">
          Mostrar somente favoritos
          <input id="inputcheck" type="checkbox">
          </input>
        </label>
      </div>
    );
  }
}

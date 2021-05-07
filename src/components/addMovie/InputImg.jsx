import React from 'react';

export default class Image extends React.Component {
  render() {
    const { onSearchTextChange, searchText, } = this.props;
    return (
      <label htmlFor="search-subtitle" data-testid="image-input-label">
        Imagem
        <input
          name={ searchText }
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

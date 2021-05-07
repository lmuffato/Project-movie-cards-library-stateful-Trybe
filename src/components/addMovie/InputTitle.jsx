import React from 'react';

export default class InputTitle extends React.Component {
  render() {
    const { onSearchTextChange,
      searchText,
      click } = this.props;
    return (
      <label htmlFor="search-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="title-input"
          onClick={ click }
        />
      </label>
    );
  }
}

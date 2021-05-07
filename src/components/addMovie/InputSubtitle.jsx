import React from 'react';

export default class Subtitle extends React.Component {
  render() {
    const { onSearchTextChange, searchText, } = this.props;
    return (
      <label htmlFor="search-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name={ searchText }
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

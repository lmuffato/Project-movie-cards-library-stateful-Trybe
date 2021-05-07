import React from 'react';

export default class Number extends React.Component {
  render() {
    const { onSearchTextChange, searchText, } = this.props;
    return (
      <label htmlFor="search-rating" data-testid="rating-input-label">
        Avaliação
        <input
          name={ searchText }
          type="number"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

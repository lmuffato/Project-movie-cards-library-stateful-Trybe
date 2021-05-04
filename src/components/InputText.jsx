import React from 'react';

class InputText extends React.Component {
  render() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <label htmlFor="search-input" data-testid="text-input-label">
        Inclui o texto
        <input
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

export default InputText;

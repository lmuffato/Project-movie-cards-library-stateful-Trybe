import React from 'react';

class InputTextArea extends React.Component {
  render() {
    const { onSearchTextChange,
      searchText,
      textLabel,
      datatestid,
      datatestidLabel } = this.props;
    return (
      <label htmlFor="search-input" data-testid={ datatestidLabel }>
        { textLabel }
        <textarea
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid={ datatestid }
        />
      </label>
    );
  }
}

export default InputTextArea;

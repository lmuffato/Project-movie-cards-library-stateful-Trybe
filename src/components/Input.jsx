import React from 'react';

class InputText extends React.Component {
  render() {
    const { onSearchTextChange,
      searchText,
      textLabel,
      datatestid,
      datatestidLabel,
      inputType,
      click } = this.props;
    return (
      <label htmlFor="search-input" data-testid={ datatestidLabel }>
        { textLabel }
        <input
          name={ searchText }
          type={ inputType }
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid={ datatestid }
          onClick={ click }
        />
      </label>
    );
  }
}

export default InputText;

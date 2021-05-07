import React from 'react';

class InputText extends React.Component {
  render() {
    const { onSearchTextChange,
      searchText,
      textButton,
      datatestid,
      datatestidLabel,
      inputType,
      click } = this.props;
    return (
      <input
        type="button"
        data-testid={ datatestid }
        onClick={ click }
      />, { textButton }
    );
  }
}

export default InputText;

import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { onSearchTextChange,
      searchText,
      textLabel,
      datatestid,
      datatestidLabel,
      inputType } = this.props;
    return (
      <label htmlFor="search-input" data-testid={ datatestidLabel }>
        { textLabel }
        <input
          name={ searchText }
          type={ inputType }
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid={ datatestid }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  textLabel: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  datatestid: PropTypes.string.isRequired,
  datatestidLabel: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
};

export default InputText;

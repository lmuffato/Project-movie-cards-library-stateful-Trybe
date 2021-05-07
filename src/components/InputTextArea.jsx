import React from 'react';
import PropTypes from 'prop-types';

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

InputTextArea.propTypes = {
  textLabel: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  datatestid: PropTypes.string.isRequired,
  datatestidLabel: PropTypes.string.isRequired,
};

export default InputTextArea;

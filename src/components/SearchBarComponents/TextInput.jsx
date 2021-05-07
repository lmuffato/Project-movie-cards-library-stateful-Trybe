import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

TextInput.defaultProps = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
};

TextInput.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
};

export default TextInput;

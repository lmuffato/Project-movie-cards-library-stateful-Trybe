import React from 'react';
import PropTypes from 'prop-types';

class InputCheckbox extends React.Component {
  render() {
    const { bookmarkedOnly,
      onBookmarkedChange,
      textLabel,
      datatestid,
      datatestidLabel } = this.props;
    return (
      <label htmlFor="search-input" data-testid={ datatestidLabel }>
        { textLabel }
        <input
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid={ datatestid }
        />
      </label>
    );
  }
}

InputCheckbox.propTypes = {
  textLabel: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  datatestid: PropTypes.string.isRequired,
  datatestidLabel: PropTypes.string.isRequired,
};

export default InputCheckbox;

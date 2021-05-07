import React from 'react';
import PropTypes from 'prop-types';

class BookmarkInput extends React.Component {
  render() {
    const { onBookmarkedChange, bookmarkedOnly } = this.props;

    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
        Mostrar somente favoritos
        <input
          type="checkbox"
          data-testid="checkbox-input"
          name="bookmarkedOnly"
          onChange={ onBookmarkedChange }
          checked={ bookmarkedOnly }
        />
      </label>
    );
  }
}

BookmarkInput.defaultProps = {
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
};

BookmarkInput.propTypes = {
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
};

export default BookmarkInput;

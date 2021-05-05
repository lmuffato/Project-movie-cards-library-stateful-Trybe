import React from "react";
import PropTypes from "prop-types";
import { Divider, Form, Label } from "semantic-ui-react";

export default function SearchBar(props) {
  const {
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    /* selectedGenre,
    onSelectedGenreChange, */
  } = props;

  return (
    <Form className="form-container" data-testid="search-bar-form">
      <Form.Field>
        <Label pointing="below" data-testid="text-input-label" htmlFor="text">
          Inclui o texto:
        </Label>
        <input
          id="text"
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
          data-testid="text-input"
        />
      </Form.Field>
      <Divider />

      <Form.Field>
        <Label pointing="below" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />
        </Label>
      </Form.Field>
    </Form>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  /* selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func, */
};

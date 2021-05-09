import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.getProps = this.getProps.bind(this);
    this.getInputs = this.getInputs.bind(this);
  }

  getProps() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    };
  }

  getInputs() {
    const inputs = [
      {
        label: 'text-input-label',
        text: 'Inclui o texto:',
        input: 'text-input',
        name: '',
        type: 'text',
        value: this.getProps().searchText,
        onChange: this.getProps().onSearchTextChange,
      },
      {
        label: 'checkbox-input-label',
        text: 'Mostrar somente favoritos',
        input: 'checkbox-input',
        name: '',
        type: 'checkbox',
        checked: this.getProps().bookmarkedOnly,
        onChange: this.getProps().onBookmarkedChange,
      },
    ];

    return inputs;
  }

  render() {
    const inputs = this.getInputs();

    return (
      <form data-testid="search-bar-form">
        {inputs.map((input) => <Input key={ input.input } { ...input } />)}

        <Select
          value={ this.getProps().selectedGenre }
          onChange={ this.getProps().onSelectedGenreChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;

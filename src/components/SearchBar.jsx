import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.getProps = this.getProps.bind(this);
    this.getInputs = this.getInputs.bind(this);
    this.getSelects = this.getSelects.bind(this);
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
    return [
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
  }

  getSelects() {
    const optionId = 'select-option';
    return [
      {
        label: 'select-input-label',
        select: 'select-input',
        text: 'Filtrar por gênero',
        value: this.getProps().selectedGenre,
        onChange: this.getProps().onSelectedGenreChange,
        options: [
          {
            id: optionId,
            value: '',
            text: 'Todos',
          },
          {
            id: optionId,
            value: 'action',
            text: 'Ação',
          },
          {
            id: optionId,
            value: 'comedy',
            text: 'Comédia',
          },
          {
            id: optionId,
            value: 'thriller',
            text: 'Suspense',
          },
        ],
      },
    ];
  }

  render() {
    const inputs = this.getInputs();
    const selects = this.getSelects();

    return (
      <form data-testid="search-bar-form">
        {inputs.map((input) => <Input key={ input.input } { ...input } />)}

        {selects.map((select) => <Select key={ select.text } { ...select } />)}
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

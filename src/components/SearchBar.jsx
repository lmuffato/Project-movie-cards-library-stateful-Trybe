import React from 'react';

import { inputs, typesSearchBar } from '../libs/data';

import Label from './Label';

function SearchBar(props) {
  const elementsSearchBar = Object.keys(inputs.SearchBar);

  return (
    <form data-testid="search-bar-form">
      {elementsSearchBar.map((element) => {
        const { label, input, propsInfo } = inputs.SearchBar[element];
        const attribute = { [typesSearchBar[propsInfo.type]]: props[propsInfo.state] };
        return (
          <Label
            key={ input.name }
            labelInfo={ label }
            inputMainInfo={ { onChange: props[propsInfo.onChange], ...attribute } }
            inputExtraInfo={ input }
          />
        );
      })}
    </form>
  );
}

export default SearchBar;

// References
// https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/label

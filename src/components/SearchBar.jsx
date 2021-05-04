import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form" action="">
          <label htmlFor="text-input" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="text-input"
              type="text"
              data-testid="text-input"
              value={ searchText }
            />
          </label>
          <input type="checkbox" />
        </form>
      </div>
    );
  }
}

export default SearchBar;

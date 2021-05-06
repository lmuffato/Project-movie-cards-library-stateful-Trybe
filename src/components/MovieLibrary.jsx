import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

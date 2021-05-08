// implement AddMovie component here
import React from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
      // storyLine: '',
      // rating: 0,
      // movies: { movies },
    };
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText=""
          onSearchTextChange="callback"
          bookmarkedOnly="false"
          onBookmarkedChange="callback"
          selectedGenre=""
          onSelectedGenreChange="uma callback"
        />
      </div>
    );
  }
}

export default MovieLibrary;

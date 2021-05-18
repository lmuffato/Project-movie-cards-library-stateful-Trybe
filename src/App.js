import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
// import movies from './data';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSearchTextChange = ({ target }) => {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange = ({ target }) => {
    this.setState({ bookmarkedOnly: target.checked });
  }

  onSelectedGenreChange = ({ target }) => {
    this.setState({ selectedGenre: target.value });
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    return (
      <div className="App">
        <Header />
        <MovieLibrary
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
      </div>
    );
  }
}

export default App;

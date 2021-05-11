import React from "react";
import Header from "./components/Header";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  // const movies = {
  //     searchText: 'string',
  //     onSearchTextChange: 'callback',
  //     bookmarkedOnly: false,
  //     onBookmarkedChange: 'callback',
  //     selectedGenre: 'string',
  //     onSelectedGenreChange: 'callback',
  // }

  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText="string"
        onSearchTextChange="callback"
        bookmarkedOnly="false"
        onBookmarkedChange="callback"
        selectedGenre="string"
        onSelectedGenreChange='callback'
      />
    </div>
  );
}

export default App;

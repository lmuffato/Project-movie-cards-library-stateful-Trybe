import React from 'react';
import HeaderComponent from './components/Header';
import './App.css';
import MovieLibraryComponent from './components/MovieLibrary';
import movies from './data';

const create = (tag, props = {}) => (...fns) => React.createElement(
  tag, props, [...fns].map((fn) => fn()),
);

const App = () => {
  const Header = create(HeaderComponent);
  const MovieLibrary = create(MovieLibraryComponent, { movies });
  return create('div', { className: 'App' })(Header, MovieLibrary);
};

export default App;

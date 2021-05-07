// projeto feito com dicas do Lucas Pedroso
// que auxiliou no entendimento do envio da props
// para state do pai com chamado de callback

import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: 'movies',
    }
  }

  addMovie = () => {
    console.log('teste');
  }
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <SearchBar />
        <AddMovie onClick={ this.addMovie }/>
      </div>
    );
  }
}

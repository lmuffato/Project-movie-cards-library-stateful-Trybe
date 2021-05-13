// implement AddMovie component here
import React from 'react';
import SearchBar from './SearchBar';


class MovieLibrary extends React.Component {
    constructor(props) {
        super(props)
        render(){
            return (
              <div>
                <h2> My awesome movie library </h2>
                <SearchBar />
                <MovieList movies={ this.props } />
                <AddMovie />
              </div>);
        
        }
    }
}
        
export default MovieLibrary;
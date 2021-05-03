import React from 'react';
import PropTypes from 'prop-types';


class SearchBar extends React.Component(this.props) {
    constructor(props) {
        super(props);
    }
    render() {
        const { movies } = this.props;
const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } =  movies;
console.log(this.props)
        return (
            <form>
            </form>
        )
    }
}

SearchBar.propTypes = {
    SearchBar: PropTypes.shape({
        searchText: PropTypes.string.isRequired,
        onSearchTextChange: PropTypes.func.isRequired,
        bookmarkedOnly: PropTypes.bool.isRequired,
        onBookmarkedChange: PropTypes.func.isRequired,
        selectedGenre: PropTypes.string.isRequired,
        onSelectedGenreChange: PropTypes.func.isRequired
    }).isRequired
}
export default SearchBar;

// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
    render() {
        return(
            <div>
                <form>
                    <label>Forme qualquer
                        <input name='nome' />
                    </label>
                </form>
            </div>
        )
    }
}

export default SearchBar;
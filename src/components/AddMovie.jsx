// implement AddMovie component here
import React from 'react';
import AddImage from './FormAddMovie/AddImage';
import AddRating from './FormAddMovie/AddRating';
import AddStoryline from './FormAddMovie/AddStoryline';
import AddSubtitle from './FormAddMovie/AddSubtitle';
import AddTitle from './FormAddMovie/AddTitle';

// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (event) => {
    this.setState({
      subtitle: event.target.value,
      title: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
      rating: event.target.value,
      genre: event.target.value,
    });
  }

  // handleReset = (event) => {
  //   this.props.onClick(this.state);
  //   event.preventDefault();
  //   this.setState({
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   });
  // }

  render() {
    // const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">

        <AddTitle value={ title } callback={ this.handleChange } />
        <AddSubtitle value={ subtitle } callback={ this.handleChange } />
        <AddImage value={ imagePath } callback={ this.handleChange } />
        <AddStoryline value={ storyline } callback={ this.handleChange } />
        <AddRating value={ rating } callback={ this.handleChange } />

        <label data-testid="genre-input-label" htmlFor="input-genre">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
            id="input-genre"
          >
            <option value="action" data-testid="genre-option" selected>Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>

        {/* <button type="submit" data-testid="send-button"
        onClick={ this.handleReset }>Adicionar filme</button> */}

      </form>
    );
  }
}

// AddMovie.propTypes = {

// }

export default AddMovie;

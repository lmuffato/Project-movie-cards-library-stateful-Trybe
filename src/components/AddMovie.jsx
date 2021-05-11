import React from 'react';
import MovieImage from './MovieImage';
import MovieTitle from './MovieTitle';
import MovieSubtitle from './MovieSubtitle';
import MovieStory from './MovieStory';
import MovieRating from './MovieRating';
import MovieGenre from './MovieGenre';

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

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    const onClick = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre } = this.state;

    return (
      <section>
        <form data-testid="add-movie-form">
          <MovieTitle
            title={ title }
            handleChange={ this.handleChange }
          />
          <MovieSubtitle
            subtitle={ subtitle }
            handleChange={ this.handleChange }
          />
          <MovieImage
            imagePath={ imagePath }
            handleChange={ this.handleChange }
          />
          <MovieStory
            storyline={ storyline }
            handleChange={ this.handleChange }
          />
          <MovieRating
            rating={ rating }
            handleChange={ this.handleChange }
          />
          <MovieGenre
            genre={ genre }
            handleChange={ this.handleChange }
          />
        </form>
      </section>
    );
  }
}

export default AddMovie;

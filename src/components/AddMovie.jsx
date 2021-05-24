import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleSubImg from './inputs/TitleSubImg';
import StLineRatingGender from './inputs/StLineRatingGender';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handles = {
    ChangeTitle: (e) => this.setState({ title: e.target.value }),
    ChangeSubt: (e) => this.setState({ subtitle: e.target.value }),
    Changeimage: (e) => this.setState({ imagePath: e.target.value }),
    ChangeSl: (e) => this.setState({ storyline: e.target.value }),
    ChangeRating: (e) => this.setState({ rating: e.target.value }),
    ChangeGenre: (e) => this.setState({ genre: e.target.value }),
  };

  SubmitNewCard = (e) => {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };

  render() {
    return (
      <form className="add-movie" data-testid="add-movie-form">
        <TitleSubImg handles={ this.handles } values={ this.state } />
        <StLineRatingGender handles={ this.handles } values={ this.state } />
        <button type="submit" data-testid="send-button" onClick={ this.SubmitNewCard }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
